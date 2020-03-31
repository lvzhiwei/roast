<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Web\AppController@getApp')->middleware('auth'); //首页, 必须是已登录用户(未登录用户会跳转到登录页面)

Route::get('/login', 'Web\AuthenticationController@getLogin')->name('login')->middleware('guest'); // 登录页面(访客)

Route::get('/auth/{social}', 'Web\AuthenticationController@getSocialRedirect')->middleware('guest'); //某个第三方下的授权页面

Route::get('/auth/{social}/callback', 'Web\AuthenticationController@getSocialCallback')->middleware('guest'); // 某个第三方的回调页面
