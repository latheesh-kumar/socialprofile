var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SocialProfile = (function () {
    function SocialProfile(name, profession, mobileNo, age, gender, language, place, currentCity, email, bloodGroup, address, college, school, skill, otherPlacesLived, favoriteQuotes, bloodDonations, interest) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getOverview = function () {
            return "Age:" + _this.age + "\n" + "Gender:" + _this.gender;
        };
        this.getWork = function () {
            return _this.profession;
        };
        this.getEducation = function () {
            return "College:" + _this.college + "\n" + "SChool:" + _this.school;
        };
        this.getLivingPalces = function () {
            return "CurrentCity:" + _this.currentCity + "\n" + "NativePlace:" + _this.place;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.setEmail = function (email) {
            _this.email = email;
        };
        this.getMobile = function () {
            return _this.mobileNo;
        };
        this.setMobile = function (mobile) {
            _this.mobileNo = mobile;
        };
        this.getAboutMe = function () {
            return _this.bloodGroup;
        };
        this.name = name;
        this.profession = profession;
        this.mobileNo = mobileNo;
        this.age = age;
        this.gender = gender;
        this.language = language;
        this.place = place;
        this.skill = skill;
        this.college = college;
        this.school = school;
        this.currentCity = currentCity;
        this.otherPlacesLived = otherPlacesLived;
        this.email = email;
        this.address = address;
        this.favoriteQuotes = favoriteQuotes;
        this.bloodDonations = bloodDonations;
        this.bloodGroup = bloodGroup;
        this.interest = interest;
    }
    return SocialProfile;
}());
var Friends = (function (_super) {
    __extends(Friends, _super);
    function Friends(name, profession, mobileNo, age, gender, language, place, currentCity, email, bloodGroup, address, college, school, skill, otherPlacesLived, favoriteQuotes, bloodDonations, interest) {
        var _this = _super.call(this, name, profession, mobileNo, age, gender, language, place, currentCity, email, bloodGroup, address, college, school) || this;
        _this.friendsListCount = function () {
            return "Friends:" + 350;
        };
        return _this;
    }
    return Friends;
}(SocialProfile));
var socialProfileObject = new SocialProfile('lathish', "Developer", 1234567890, 30, "Male", "Tamil", "Bangalore", "Bangalore", "lat@gmail.com", "A+", "23/H,Kundwani", "PAavai", "MSp");
var friendsListCount = new Friends('lathish', "Developer", 1234567890, 30, "Male", "Tamil", "Bangalore", "Bangalore", "lat@gmail.com", "A+", "23/H,Kundwani", "PAavai", "MSp");
console.log(socialProfileObject.getName());
console.log(socialProfileObject.getOverview());
console.log(socialProfileObject.getLivingPalces());
console.log(socialProfileObject.getEducation());
console.log(socialProfileObject.getWork());
console.log(socialProfileObject.getAboutMe());
//Access private Properties
console.log(socialProfileObject.getEmail());
socialProfileObject.setEmail('th@gmail.com');
console.log(socialProfileObject.getEmail());
console.log(socialProfileObject.getMobile());
socialProfileObject.setMobile(6398521470);
console.log(socialProfileObject.getMobile());
//ccess Inheritance Properties
console.log(friendsListCount.friendsListCount());
