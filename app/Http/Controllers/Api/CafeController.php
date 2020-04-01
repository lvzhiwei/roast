<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Http\Requests\Request;
use App\Models\Cafe;

class CafeController extends Controller
{
    // 获取咖啡厅列表
    public function getCafes()
    {
        $cafes = Cafe::all();
        return response()->json($cafes);
    }

    // 咖啡厅详情
    public function getCafe($id)
    {
        $cafe = Cafe::where('id', $id)->first();
        return response()->json($cafe);
    }

    // 新建咖啡厅
    public function postNewCafe()
    {
        $cafe = new Cafe();

        $cafe->name = Request::get('name');
        $cafe->address = Request::get('address');
        $cafe->city = Request::get('city');
        $cafe->state = Request::get('state');
        $cafe->zip = Request::get('zip');

        $cafe->save();

        return response()->json($cafe, 201); // Restful 201, 实体已创建
    }
}
