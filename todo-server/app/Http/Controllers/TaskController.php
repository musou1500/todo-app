<?php

namespace App\Http\Controllers;

use App\Rules\ColorCode;
use App\Task;
use Faker\Provider\Color;
use Illuminate\Http\Request;
use App\Httpp\Requests\StoreTaskRequest;
use App\Httpp\Requests\UpdateTaskRequest;
use Illuminate\Http\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Task::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTaskRequest $request)
    {
        return DB::transaction(function () use ($request) {
            $task = Task::create($request->except('labels'));
            if($request->has('labels')) {
                $task->setLabelIds($request->labels);
            }
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        return DB::transaction(function () use ($request, $task) {
            $task->fill($request->except('labels'))->save();
            if ($request->has('labels')) {
                $task->setLabelIds($request->labels);
            }
            return $task;
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $task->delete();
        response(null, Response::HTTP_NO_CONTENT);
    }
}
