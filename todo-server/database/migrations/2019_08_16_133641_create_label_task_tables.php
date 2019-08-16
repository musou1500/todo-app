<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabelTaskTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('label_task', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('label_id');
            $table->unsignedBigInteger('task_id');
            $table->timestamps();
            $table->unique(['label_id', 'task_id']);
            $table->foreign('label_id')->references('id')->on('labels')->onDelete('cascade');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('label_task');
    }
}
