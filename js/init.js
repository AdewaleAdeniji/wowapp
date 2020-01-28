(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
	.then(()=>{
		console.log("serviceworker registered"); 
	})
	.catch((err)=>{
		console.log("serviceworker not registered"+err);
	})
}

     var a = localStorage.getItem('demo');
      if(a==undefined||a==""){
        //demo and welcome screen
        ini();
        Swal.fire({
          title:'Hi <i class="fa fa-hand-holding-heart"></i>',
          text:"Welcome to WowApp, I am Alexa and I'll like to take you through a quick demo,would you care ? ",
          showConfirmButton:true,
          confirmButtonText:'Okay Alexa',
          cancelButtonText:'No,thanks',
          showCloseButton:true,
          showCancelButton:true,
          confirmButtonColor:'#000',
          cancelButtonColor:'red',
          allowOutsideClick:false,
         backdrop:"#666666",

        })
        .then((result)=>{
            fisibi('demo',true);

          if(result.value){
            //demo starts
            demo();
          }
        })
      }
      else {
        openport();
      }
      //demo();
      function demo(){
        relekun("oya");
        Swal.fire({
        //imageUrl: 'images/added.png',
        //grow:'column',
        text:'You can click on the add button to adding birthdays',
        confirmButtonText:'Continue',
        showCloseButton:true,
        allowOutsideClick:false,
        //imageAlt: 'Welcome to WowApp,where you can save up the birthdates of your loved ones',
          

      })   
      .then((result)=>{
        Swal.fire({
          type:'success',
          text:'You can click the individual birthdays for more information',
          confirmButtonText:'Thanks Alexa',
          footer:'GoodBye from Alexa',  
        })
      })   
      }
      function ini(){
      //initialize  app
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      months.forEach((item,index)=>{
      var arr = [];

      for(i=0;i<31;i++){
        arr.push("");
      }
      localStorage.setItem(item,arr);
    });
      localStorage.setItem("users","");
      } 
    $(document).ready(function(){
     

    $('.fixed-action-btn').floatingActionButton();
     $('.datepicker').datepicker();
  });
      
     $(".addbday").click(function(){
        askfor();
     });
     function askfor(){
       Swal.fire({
          title:'Add a new birthday <i class"fa fa-birthday-cake"></i>',
          type:'question',
          input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          required:true,
          type:'text',
          placeholder:'Enter Celebrants Full Name',
          id : 'bdayname',  
          minlength:3,
          inputAutoTrim: true,
        },
        validationMessage:'Enter a valid Full Name',
        showCancelButton:true,
        cancelButtonText:'<i class="fa fa-times"></i>',
        confirmButtonText:'Next',
        reverseButtons:true,
        allowOutsideClick:false,

        })
        .then((result)=>{
          if(result.value){
            var name = result.value;
            Swal.fire({
              title:'Birth Date',
              html:`<div class="input-field">
          <input id="birthdate" type="text" class="datepicker" id="mydate" onchange=che(this)>
          <label for="birthdate">Birthdate</label>
        </div><BR><br><br>`,
               showCancelButton:false,
              cancelButtonText:'<i class="fa fa-times"></i>',
              confirmButtonText:'Add Birthday <i class="fa fa-birthday-cake"></i>',
              reverseButtons:true,
              allowOutsideClick:false,
              //grow:'fullscreen',
              footer:'<span class="blue-text">Info</span>&nbsp;&nbsp;You can choose 2019 in case you don\'t know the year<br>The year is not recorded for privacy purposes',
              onOpen: function app()  {
               $('.swal2-actions').css('z-index',0);
              // get("btnSend").disabled = true;
              },
            })
             .then((result)=>{

              var date = kinni("mydate2");
             
              if(date==""){ 
                askfor();
              }
              else{
              if(result.value){
                
                Swal.fire({
                  type:'success',
                  html:'Did you want to add '+name+' <i class="fa fa-birthday-cake"></i>&nbsp;&nbsp;'+date,
                  showCancelButton:true,
                  allowOutsideClick:false,
                  cancelButtonText:'Edit Details',
                  confirmButtonText:'Add <i class="fa fa-plus"></i>',
                  reverseButtons:true,

                }).then((result)=>{
                  if(result.value){
                    //relekun("save to ls");

                     var ds = pinsi(date," ");
                     var mon = awonosu();
                     var o = sowaninu(mon,ds[0]);
                     var oj = pinsi(ds[1],"");
                     var ojo = oj[0]+oj[1];
                     var l = dinomba(ojo);
                      var users = lomuwa("users");
                      if(users==""){
                        var usersarr = [];
                      }
                      else {
                        var usersarr = pinsi(users,":");
                      }

                      var userid = usersarr.length;
                      var username = name;
                      var ndate = date;
                      var h = userid+":"+username+":"+ndate;
                      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                      var seen = months[o];
                      var month = lomuwa(seen);
                      var io = pinsi(month,',');
                      var me = io[l];
                      var nme = me+":"+userid;
                      let userarr = users+"~"+h;
                      localStorage.setItem('users',userarr);
                      io[l] = nme;
                      localStorage.setItem(seen,io);
                      Swal.fire({
                        type:'success',
                        title:'You successfully added '+username,
                        confirmButtonText:"Yes,I made it",
                      });
                      openport();
                      //console.log("done");
                  }
                  else {
                    askfor();    
                  }
                });
              }
            }


            });
               $('.datepicker').datepicker();
           // console.log(result.value);
          }
        })
     }
     function che(e){
       var a = e.value;
       ibo("mydate2").value=a;
     }
     function openport(){
      ibo("bdays").innerHTML="";
      var month = osuyii();
      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      var seen = months[month];

      var arr = pinsi(lomuwa(seen),",");
      arr.forEach((item,index)=>{
      //  console.log(item);
        if(item==""){

        }
        else {
          var ar = item.split(":");
          if(ar==""){

          }
          else{
            ar.forEach((u,i)=>{

            
            if(u==""){

            }
            else {
              var userdet = who(u);
            //console.log(userdet);
            var userid = userdet[0];
            var username = userdet[1];
            var bdt = userdet[2];
            var c = calctime(bdt);
          var obj = `
                 <li class="collection-item avatar item" postid="${userid}">
             <i class="fa fa-user circle black white-text"></i>
               <span class="title">${username}<a href="#!" class="secondary-content"><i class="fa fa-heart"></i></a>
              <p class="light-green-text small"><i class="fa fa-birthday-cake light-green-text"></i>&nbsp;&nbsp;${bdt}<br>
               <span class="badge black white-text small">${c}</span>
               </p>
              </li>`;
              $("#bdays").append(obj);
            }

            });


            }
            }

      })
      //console.log(seen);
      opener();
     }
      function calctime(e){
            var ds = pinsi(e," ");
            var mon = awonosu();
            var month = sowaninu(mon,ds[0]);
            var oj = pinsi(ds[1],"");
            var day = oj[0]+oj[1];
          var l = dinomba(day);
          var tday = oni();
          var tmonth = osuyii();
          if(month==tmonth){
            if(day==tday){
                var f = 'Birthday today <i class="fa fa-birthday-cake"></i><i class="fa fa-user-friends"></i>';

            }
            else {
              var y = paada(tday-day);
              if(y<2){
                var f = y+" day";
              }
              else {
                var f = y+" days";
              }
              
            }
          }
          else {
            var y = paada(tmonth=month);
            if(y==0){
                 var f = 1+" month";
            }
            else  if(y<2){
                 var f = y+" month";
              }
              else {
                 var f = y+" months";
              }
           
          }
          return "in "+f;
      }
     function opener(){



    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var mon = osuyii();
    delete months[mon];
    months.forEach((month,iot)=>{

      var seen = month;
      if(seen==''){

      }
      else {

      var arr = pinsi(lomuwa(seen),",");
      arr.forEach((item,index)=>{
      //  console.log(item);
        if(item==""){

        }
        else {
          var ar = item.split(":");
          if(ar==""){

          }
          else{
            ar.forEach((u,i)=>{

            
            if(u==""){

            }
            else {
              var userdet = who(u);
            //console.log(userdet);
            var userid = userdet[0];
            var username = userdet[1];
            var bdt = userdet[2];
            var c = calctime(bdt);
          var obj = `
                 <li class="collection-item avatar item" postid="${userid}">
             <i class="fa fa-user circle black white-text"></i>
               <span class="title">${username}<a href="#!" class="secondary-content"><i class="fa fa-heart"></i></a>
              <p class="light-green-text small"><i class="fa fa-birthday-cake light-green-text"></i>&nbsp;&nbsp;${bdt}<br>
               <span class="badge black white-text small">${c}</span>
               </p>
              </li>`;
              $("#bdays").append(obj);
            }

            });


            }
            }

      })
    }
      })
      //console.lo
      $(".item").click(function(){
        var id = $(this).attr("postid");
        more(id);

     
      });
    }
      function more(e){
        //console.log(e);
        var elem = who(e);
        //console.log(elem);
        var me = elem;
        var username = me[1];
        var birthdate = me[2];
        var userid = me[0];
          Swal.fire({
            title:username,
            html:'Birthdate '+birthdate,
            confirmButtonText:'Okay',
            cancelButtonText:'<i class="fa fa-trash"></i>',
            showCancelButton:true,
            allowOutsideClick:false,
            showCloseButton: false,
            footer:calctime(me[2]),
          })
          .then((result)=>{
            if(result.value){

            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
              //delete 
              //console.log('delete');
              Swal.fire({
                type:'warning',
                title:'Did you really want to delete '+username,
                confirmButtonText:'Yes,Delete It',
                cancelButtonText:'Cancel Delete',

              })
              .then((result)=>{
                if(result.value){
                    deletes(userid,birthdate);
                }
              })
            }
            else {

            }
            });

          }


      function deletes(e,date){
      try{
        var arr = pinsi(lomuwa('users'),'~');
        //ar users = arr.indexOf(e);v
        var find = '';
        arr.forEach((item,index)=>{
          var i = item.split(":");
          var id = i[0];
          if(id==e){
            find = index;
          }
        });
        arr[find] = "";
        localStorage.setItem("users",arr);
       // var dates = date.split(" ");
         var ds = pinsi(date," ");
            var mon = awonosu();
            var j = sowaninu(mon,ds[0]);
            var oj = pinsi(ds[1],"");
            var day = oj[0]+oj[1];
          var l = dinomba(day);
           var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          var month = months[j];
          var seen = lomuwa(month);
          var narr = seen.split(",");
          var found = '';
          var bday = narr[l];
          //console.log(bday);
          var bdays = bday.split(":");
          var fi = '';
          bdays.forEach((obj,iu)=>{
            if(obj==e){
              fi = iu;
            }
          });
          bdays[fi] = "";
          narr[l] = bdays;

          localStorage.setItem(month,narr);
          openport();
          Swal.fire({
            type:'success',
            text:'Birthday successfully deleted',
            timer:2000,
          })
        }
        catch(err){
          Swal.fire({
            type:'error',
            text:'Error Occured while processing your request',
          });
        }
             }  

     function who(e){
      var arr = lomuwa("users");
      var narr = arr.split("~");
      var username = '';
      var birthdate = '';
      var userid = '';
      var str = '';
      narr.forEach((item,index)=>{
          var n = item.split(":");
          var userid = n[0];
          if(userid==e){
            str = n;
           // console.log(str+":"+e);
          }
         // console.log(item);
      });
      return str;
     }
