"use client"

import { useState } from "react";
import ClickButton from "@/app/components/ClickButton";
import Input from "@/app/components/Input";
import TagsInput from "@/app/components/tag/TagsInput";

interface TodoFormProps {
    onSaveTodo: (value: string, tags: string[]) => void;
    autoCompleteTags: string[]
}

const TodoForm = ({
    onSaveTodo,
    autoCompleteTags = []
}: TodoFormProps) => {
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    
    const addClickHandler = () => {
        onSaveTodo(inputValue, tags);
        setInputValue(inputValue);
        setTags([]);
    }

    return (
        <div>
            <Input
                value={inputValue}
                onChange={setInputValue}
                placeholder="Enter Todo..." />
            <TagsInput
                tags={tags}
                onChangeTags={setTags} // タグが変更されたときに state を更新
                autoCompleteTags={autoCompleteTags}
                placeholder="Enter Tags..." // タグ入力のプレースホルダー
            />
            <ClickButton
                label="Add"
                onClick={addClickHandler}
                disabled={!inputValue} />
        </div>
    );
}

export default TodoForm;