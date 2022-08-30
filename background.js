 document.getElementById("eventbtn").addEventListener("click",q1)
 document.getElementById("updatebtn").addEventListener("click",q2)
function q1() {
        $.ajax({
            type : "get",
            url: "http://openapi.seoul.go.kr:8088/446b6d616264726b37344648735043/json/bikeList/1/20/",
            data : {},
            success : function(response) {
                $("#name-q1").empty()
                let bike_list = response["rentBikeStatus"]["row"]

                for (let i = 0; i < bike_list.length; i++){
                    let name_stat = bike_list[i]["stationName"]
                    let rack_cnt = bike_list[i]["rackTotCnt"]
                    let park_bike = bike_list[i]["parkingBikeTotCnt"]

                let inputName = $("#name").val()

                    if (park_bike * 1 >= inputName){
                let tr_bike = `<tr>
                    <td>${name_stat} 앞</td>
                    <td>${rack_cnt}</td>
                    <td>${park_bike}</td>
                    </tr>
                `
                $("#name-q1").append(tr_bike)
                }
                                }
                            }
                        })
                    };


function q2() {
    $.ajax({
        type : "get",
        url: "http://openapi.seoul.go.kr:8088/446b6d616264726b37344648735043/json/bikeList/1/20/",
        data : {},
        success : function(response) {
            $("#name-q1").empty()
            let bike_list = response["rentBikeStatus"]["row"]

            for (let i = 0; i < bike_list.length; i++){
                let name_stat = bike_list[i]["stationName"]
                let rack_cnt = bike_list[i]["rackTotCnt"]
                let park_bike = bike_list[i]["parkingBikeTotCnt"]
            let tr_bike = `<tr>
                <td>${name_stat} 앞</td>
                <td>${rack_cnt}</td>
                <td>${park_bike}</td>
                </tr>
            `
            $("#name-q1").append(tr_bike)


                            }
                        }
                    })
                };

                    
