export class Question {
    _id: String;
    name: String;
    question_order: Number;
    question_text: String;
    question_type: String;
    assessment_id: String;
    answer_option: [{
        option_text: String,
        score: Number,
        answer_bucket: String 
    }];
    updated : {
        type:'timestamp', 
        onUpdate: true,
    };
}
