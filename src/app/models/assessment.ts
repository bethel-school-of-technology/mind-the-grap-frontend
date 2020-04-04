export class Assessment {
    _id:String;
    title: String;
    description: String;
    assessment_type: String;
    updated : {
        type:'timestamp', 
        onUpdate: true,
    };
}
