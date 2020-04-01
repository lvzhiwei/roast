<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//默认路由
/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

// 群组路由
Route::group(['prefix'=>'v1', 'middleware'=>'auth.api'], function () {
    Route::get('/user', function (Request $request) {
       return $request->user();
    });

    // 咖啡相关功能
    Route::get('/cafes', 'Api\CafeController@getCafes'); //咖啡厅列表
    Route::post('/cafes', 'Api\CafeController@postNewCafe'); //前端通过表单提交过来的咖啡店.
    Route::get('/cafes/{id}', 'Api\CafeController@getCafe'); //通过id获取咖啡店详情
});


