export class Assessment {
    title: String;
    description: String;
    assessment_type: String;
    updated : {
        type:'timestamp', 
        onUpdate: true,
    };
}
