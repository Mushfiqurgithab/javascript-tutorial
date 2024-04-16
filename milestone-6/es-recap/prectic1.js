// How will you access Sophia’s secondary school location?
let data ={
    sophia: {
        id: 33,
        study: [
            {
                primary:[
                    { school_name: "ABC primary school"},
                    { location: "Peters bugs"}
                ]
            },
            {
                secondary:[
                    { school_name: "ABC secondary school"},
                    { location: "St Lorence"}
                ]
            },
        ]
    }
}

console.log(data.sophia.study[1].secondary[1])