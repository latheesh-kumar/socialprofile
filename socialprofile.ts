class SocialProfile{

    name:string;
    profession:string;
    private mobileNo:number;
    private age:number;
    gender:string;
    language:string;
    place:string;
    skill:string;
    college:string;
    school:string;
    currentCity:string;
    otherPlacesLived:string;
    private email:string;
    address:string;
    favoriteQuotes:string;
    bloodDonations:string;
    bloodGroup:any;
    interest:string;

    constructor(name:string,profession:string,mobileNo:number,age:number,gender:string,language:string,place:string
    ,currentCity:string,email:string,bloodGroup:any,address:string,college:string,school:string,skill?:string,otherPlacesLived?:string,
    favoriteQuotes?:string,bloodDonations?:string,interest?:string){
    this.name=name;
    this.profession=profession;
    this.mobileNo=mobileNo;
    this.age=age;
    this.gender=gender;
    this.language=language;
    this.place=place;
    this.skill=skill;
    this.college=college;
    this.school=school;
    this.currentCity=currentCity;
    this.otherPlacesLived=otherPlacesLived;
    this.email=email;
    this.address=address;
    this.favoriteQuotes=favoriteQuotes;
    this.bloodDonations=bloodDonations;
    this.bloodGroup=bloodGroup;
    this.interest=interest;
    }
    getName=()=>{
        return this.name;
    }
    getOverview=()=>{
        return "Age:"+this.age+"\n"+"Gender:"+this.gender

    }
    getWork=()=>{
        return this.profession;

    }
    getEducation=()=>{
        return "College:" +this.college+"\n"+"SChool:"+this.school;

    }
    getLivingPalces=()=>{
        return "CurrentCity:"+ this.currentCity+"\n"+"NativePlace:"+this.place;
    }
    getEmail=()=>{
        return this.email

    }
    setEmail=(email:string)=>{
        this.email=email
    }
    getMobile=()=>{
        return this.mobileNo;
    }
    setMobile=(mobile:number)=>{
        this.mobileNo=mobile
    }

    getAboutMe=()=>{
        return this.bloodGroup

    }
}
class Friends extends SocialProfile{

    constructor(name:string,profession:string,mobileNo:number,age:number,gender:string,language:string,place:string
        ,currentCity:string,email:string,bloodGroup:any,address:string,college:string,school:string,skill?:string,otherPlacesLived?:string,
        favoriteQuotes?:string,bloodDonations?:string,interest?:string){
        super(name,profession,mobileNo,age,gender,language,place,currentCity,email,bloodGroup,address,college,school)

        }
        friendsListCount=()=>{
            return "Friends:"+350;
         }

}

let socialProfileObject= new SocialProfile('lathish',"Developer",1234567890,30,"Male","Tamil","Bangalore","Bangalore","lat@gmail.com","A+","23/H,Kundwani","PAavai","MSp");

let friendsListCount=new Friends('lathish',"Developer",1234567890,30,"Male","Tamil","Bangalore","Bangalore","lat@gmail.com","A+","23/H,Kundwani","PAavai","MSp")

console.log(socialProfileObject.getName());

console.log(socialProfileObject.getOverview());

console.log(socialProfileObject.getLivingPalces());

console.log(socialProfileObject.getEducation());

console.log(socialProfileObject.getWork());

console.log(socialProfileObject.getAboutMe());

//Access private Properties
console.log(socialProfileObject.getEmail())
socialProfileObject.setEmail('th@gmail.com')
console.log(socialProfileObject.getEmail())

console.log(socialProfileObject.getMobile())
socialProfileObject.setMobile(6398521470)
console.log(socialProfileObject.getMobile())

//ccess Inheritance Properties
console.log(friendsListCount.friendsListCount());
