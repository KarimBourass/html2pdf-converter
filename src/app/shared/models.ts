export interface Survey {
    name: string,
    description: string,
    sections: Section[],
    status: 'draft' | 'published' | 'archived',
}


export interface Section {
    name: string,
    description: string,
    questions: Question[]
}

export interface Question {
    label: string,
    code: string, // Generated based on label
    description: string,
    type: 'text' | 'textarea' | 'radio' | 'number' | 'select-single' | 'select-multiple' | 'date'
    validators?: any[], // depending on type
    options?: Options[]
}

export interface Options {
    value: string,
    label: string,
}