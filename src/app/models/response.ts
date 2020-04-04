export class Response {
    user_id: String;
    assessment_id: String;
    question_id: String;
    answer_option_id: String;
    response: boolean;
    updated : {
        type: 'timestamp',
        onUpdate: true,
    };
}


