<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'deadline' => 'date|nullable',
            'name' => 'string|max:255',
            'description' => 'string|nullable',
            'labels' => 'array|nullable',
            'labels.*' => 'integer|exists:labels,id'
        ];
    }
}
