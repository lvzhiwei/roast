<?php


namespace App\Http\Controllers\Web;


use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthenticationController extends Controller
{
    public function getLogin()
    {
        return view('login');
    }

    // 重定向到第三方 OAuth 服务授权页面获取授权码
    public function getSocialRedirect($account)
    {
        try {
            return Socialite::with($account)->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('/login'); //重定向出现异常, 返回到登录页面
        }
    }

    // 用于从第三方 OAuth 回调（这里是 Github）中获取用户信息，
    //如果该用户在 Roast 中不存在的话将其保存到 users 表，
    //然后手动对该用户进行登录认证操作，如果已存在的话直接进行登录操作：
    public function getSocialCallback($account)
    {
        // 从第三方 Oauth 回调中获取用户信息
        $socialUser = Socialite::with($account)->user();

        // 在本地用户表中出现该用户来判断是否已存在
        $user = User::where('provider_id', $socialUser->id)
                    ->where('provider', '=', $account)
                    ->first();

        if ($user === null)
        {
            // 该用户不存在, 则保持用户信息到 users 表中
            $newUser = new User();

            $newUser->name = $socialUser->getNickname();
            $newUser->email = $socialUser->getEmail() == '' ? '' : $socialUser->getEmail();
            $newUser->avatar = $socialUser->getAvatar();
            $newUser->password = '';
            $newUser->provider = $account;
            $newUser->provider_id = $socialUser->getId();

            $newUser->save();
            $user = $newUser;
        }

        // 手动登录该用户
        Auth::login($user);

        // 登录成功后将用户重定向到首页
        return redirect('/');


    }
}
