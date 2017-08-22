function get_info(id:number, name:string, email?:string){
  console.log("id "+id)
  console.log("id "+name)
  
  if(email != undefined)
    console.log(email)
}

get_info(1, "pilathraj")
get_info(1, "pilathraj", "pilathraj@gmail.com")

