export class Response {
    _id: String;
    user_id: String;
    assessment_id: String;
    question_id: String;
    answer_option_id: String;
    updated : {
        type: 'timestamp',
        onUpdate: true,
 };
}
