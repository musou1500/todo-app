<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Task extends Model
{
    protected $fillable = ['name', 'description', 'deadline', 'done'];
    protected $dates = ['created_at', 'updated_at', 'deadline'];
    protected $with = ['labels'];

    public function labels() {
        return $this->belongsToMany(Label::class);
    }

    public function setLabelIds($ids) {
        $this->labels()->sync($ids);
        $this->load('labels');
    }

    public function setDeadlineAttribute($value)
    {
        $this->attributes['deadline'] = empty($value) ? null : Carbon::parse($value)->toDateTimeString();
    }
}
