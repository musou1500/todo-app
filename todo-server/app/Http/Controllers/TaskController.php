<?php

namespace App\Http\Controllers;

use App\Rules\ColorCode;
use App\Task;
use Faker\Provider\Color;
use Illuminate\Http\Request;
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
    public function store(Request $request)
    {
        $data = $request->validate([
            'deadline' => 'date|nullable',
            'name' => 'required|string|max:255',
            'description' => 'string|nullable',
            'labels' => 'array',
            'labels.*' => 'integer|exists:labels,id'
        ]);

        $task = Task::create($data);
        if(isset($data['labels'])) {
            $task->setLabelIds($data['labels']);
        }
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
    public function update(Request $request, Task $task)
    {
        $data = $request->validate([
            'deadline' => 'date|nullable',
            'name' => 'string|max:255|nullable',
            'done' => 'boolean',
            'description' => 'string|nullable',
            'labels' => 'array',
            'labels.*' => 'integer|exists:labels,id'
        ]);

        $task->fill($data)->save();
        if(isset($data['labels'])) {
            $task->setLabelIds($data['labels']);
        }
        return $task;
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
