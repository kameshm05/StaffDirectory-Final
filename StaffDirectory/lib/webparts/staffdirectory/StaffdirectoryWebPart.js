var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "StaffdirectoryWebPartStrings";
import { SPComponentLoader } from "@microsoft/sp-loader";
SPComponentLoader.loadScript("https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js");
import * as $ from "jquery";
import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/profiles";
import "@pnp/sp/site-groups";
SPComponentLoader.loadScript("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.4.min.js"
// "https://code.jquery.com/jquery-3.5.1.js"
);
import "../../ExternalRef/CSS/style.css";
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css");
SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
//import "datatables";
require("datatables.net-dt");
require("datatables.net-rowgroup-dt");
SPComponentLoader.loadCss("https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css");
var that;
setTimeout(function () {
    SPComponentLoader.loadScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js");
    SPComponentLoader.loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js");
    SPComponentLoader.loadScript("https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js");
    SPComponentLoader.loadCss("https://cdn.datatables.net/rowgroup/1.0.2/css/rowGroup.dataTables.min.css");
    SPComponentLoader.loadScript("https://cdn.datatables.net/rowgroup/1.0.2/js/dataTables.rowGroup.min.js");
}, 1000);
import "../../ExternalRef/css/alertify.min.css";
var alertify = require("../../ExternalRef/js/alertify.min.js");
var UserDetails = [];
var listUrl = "";
var bioAttachArr = [];
var SelectedUser = "";
var ItemID = 0;
var SelectedUserProfile = [];
var selectedUsermail = "";
var CCodeHtml = "";
var CCodeArr = [];
var OfficeAddArr = [];
var AvailEditFlag = false;
var AvailEditID = 0;
var AllAvailabilityDetails = [];
var availList = [];
var editID;
var IsgeneralStaff = false;
var IssplStaff = false;
var IsAdminStaff = false;
var currentMail = "";
var ProfilePics = [];
var oTableSDG;
var OfficeDetails = [];
var userAvailTable;
var StaffdirectoryWebPart = /** @class */ (function (_super) {
    __extends(StaffdirectoryWebPart, _super);
    function StaffdirectoryWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaffdirectoryWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp.setup({
                spfxContext: _this.context,
            });
        });
    };
    StaffdirectoryWebPart.prototype.render = function () {
        listUrl = this.context.pageContext.web.absoluteUrl;
        currentMail = this.context.pageContext.user.email;
        var siteindex = listUrl.toLocaleLowerCase().indexOf("sites");
        listUrl = listUrl.substr(siteindex - 1) + "/Lists/";
        this.domElement.innerHTML = "\n     <div class=\"grid-section\">\n     <div class=\"left\">\n     <div class=\"left-nav\">\n     <div class=\"accordion\" id=\"accordionExample\">\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDHEmployee show\" id=\"headingOne\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"><span class=\"nav-icon sdh-emp\"></span>SDG Employees</div>\n\n       </div>\n       <div id=\"collapseOne\" class=\"clsCollapse collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"sdhlastnamesort\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"sdhfirstnamesort\">By First Name</a></li>\n         <li><a href=\"#\" class=\"sdhLocgrouping\">By Office</a></li>\n         <li><a href=\"#\" class=\"sdhTitlgrouping\">By Title/Staff Function</a></li>\n         <li><a href=\"#\" class=\"sdhAssistantgrouping\">By Assistant</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items  OutsidConsultant\" id=\"headingTwo\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\" ><span class=\"nav-icon out-con\"></span> Outside Consultant</div>\n       </div>\n       <div id=\"collapseTwo\" class=\"clsCollapse collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"OutConslastnamesort\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"OutConsFirstnamesort\">By First Name</a></li>\n         <li><a href=\"#\" class=\"OutConsLocgrouping\">By Office Affiliation</a></li>\n         <li><a href=\"#\" class=\"OutConsStaffgrouping\">By Staff Function</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDHAffiliates\" id=\"headingThree\">\n           <div  data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\"><span class=\"nav-icon affli\"></span>Affiliates</div>\n       </div>\n       <div id=\"collapseThree\" class=\"clsCollapse collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"Afflastnamesort\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"AffFirstname\">By First Name</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDHAlumini\" id=\"headingFour\">\n         <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\"><span class=\"nav-icon sdh-alumini\"></span>SDG Alumni</div>\n       </div>\n       <div id=\"collapseFour\" class=\"clsCollapse collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"SDHAlumniLastName\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"SDHAlumniFirstName\">By First Name</a></li>\n         <li><a href=\"#\" class=\"SDHAlumniOffice\">By SDG Office</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDHShowAll\" id=\"headingFive\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\"> <span class=\"nav-icon show-all\"></span>Show All People</div>\n       </div>\n       <div id=\"collapseFive\" class=\"clsCollapse collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"SDHShowAllLastName\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"SDHShowAllFirstName\">By First Name</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDGOfficeInfo\" id=\"headingSix\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\"><span class=\"nav-icon show-office\"></span>SDG Office Info</div>\n       </div>\n       <div id=\"collapseSix\" class=\"clsCollapse collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"SDGOfficeInfoLastName\">By Last Name</a></li>\n         <li><a href=\"#\"class=\"SDGOfficeInfoFirstName\">By First Name</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items StaffAvailability\" id=\"headingSeven\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseSeven\" aria-expanded=\"false\" aria-controls=\"collapseSeven\"><span class=\"nav-icon staff-avail\"></span>Staff Availability</div>\n       </div>\n       <div id=\"collapseSeven\" class=\"clsCollapse collapse\" aria-labelledby=\"headingSeven\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <!--<ul>\n         <li><a href=\"#\">By Office</a></li>\n         <li><a href=\"#\">By Title</a></li>\n         </ul>-->\n         </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"card\">\n       <div class=\"card-header nav-items SDGBillingRate\" id=\"headingEight\">\n           <div data-toggle=\"collapse\" class=\"clsToggleCollapse\" data-target=\"#collapseEight\" aria-expanded=\"false\" aria-controls=\"collapseEight\"><span class=\"nav-icon billing-rate\"></span>Billing Rates</div>\n       </div>\n       <div id=\"collapseEight\" class=\"clsCollapse collapse\" aria-labelledby=\"headingEight\" data-parent=\"#accordionExample\">\n         <div class=\"card-body\">\n         <div class=\"filter-section\">\n         <ul>\n         <li><a href=\"#\" class=\"SDGBillingRateLastName\">By Last Name</a></li>\n         <li><a href=\"#\" class=\"SDGBillingRateFirstName\">By First Name</a></li>\n         </ul>\n         </div>\n         </div>\n       </div>\n     </div>\n   </div>\n     </div>\n     </div>\n     <div class=\"right\">\n     <div class=\"sdh-employee\" id=\"SdhEmployeeDetails\">\n     <!-- <div class=\"title-section\">\n     <h2>Overview</h2>\n     </div> -->\n     <div class=\"title-filter-section\">\n     </div>\n     <div class=\"sdh-emp-table oDataTable\">\n\n     <div class='FilterTable'>\n     <div class=\"serchdiv\">\n     <label>Location:</label>\n     <select id=\"drpLocationforEmployee\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Title:</label>\n     <select id=\"drpTitleforEmployee\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Assistant:</label>\n     <select id=\"drpAssistantforEmployee\">\n     <option value=\"Select\">Select</option>\n     </select>\n     </div>\n     </div>\n     \n     <table  id=\"SdhEmpTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>Phone Number</th>\n     <th>Location</th>\n     <th>Job Title</th>\n     <th>Title</th>\n     <th>Assistant</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdhEmpTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"sdh-outside-table oDataTable hide\">\n     <div class='FilterTable'>\n     <div class=\"serchdiv\">\n     <label>Location:</label>\n     <select id=\"drpLocationforOutside\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Title:</label>\n     <select id=\"drpTitleforOutside\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Assistant:</label>\n     <select id=\"drpAssistantforOutside\">\n     <option value=\"Select\">Select</option>\n     </select>\n     </div>\n     </div> \n     <table  id=\"SdhOutsideTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>Phone Number</th>\n     <th>Location</th>\n     <th>Job Title</th>\n     <th>Title</th>\n     <th>Assistant</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdhOutsideTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"sdh-Affilate-table oDataTable hide\">\n     <div class='FilterTable'>\n     <div class=\"serchdiv\">\n     <label>Location:</label>\n     <select id=\"drpLocationforAffiliates\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Title:</label>\n     <select id=\"drpTitleforAffiliates\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Assistant:</label>\n     <select id=\"drpAssistantforAffiliates\">\n     <option value=\"Select\">Select</option>\n     </select>\n     </div>\n     </div>\n\n  \n     <table  id=\"SdhAffilateTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>Phone Number</th>\n     <th>Location</th>\n     <th>Job Title</th>\n     <th>Title</th>\n     <th>Assistant</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdhAffilateTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"sdh-Allumni-table oDataTable hide\">\n     <div class='FilterTable'>\n     <div class=\"serchdiv\">\n     <label>Location:</label>\n     <select id=\"drpLocationforAlumni\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Title:</label>\n     <select id=\"drpTitleforAlumni\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Assistant:</label>\n     <select id=\"drpAssistantforAlumni\">\n     <option value=\"Select\">Select</option>\n     </select>\n     </div>\n     </div>\n\n     \n     <table  id=\"SdhAllumniTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>Phone Number</th>\n     <th>Location</th>\n     <th>Job Title</th>\n     <th>Title</th>\n     <th>Assistant</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdhAllumniTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"sdh-AllPeople-table oDataTable hide\">\n     <div class='FilterTable'>\n     <div class=\"serchdiv\">\n     <label>Location:</label>\n     <select id=\"drpLocationforAllPeople\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Title:</label>\n     <select id=\"drpTitleforAllPeople\">\n     <option value=\"Select\">Select</option>\n     </select>\n     <label>Assistant:</label>\n     <select id=\"drpAssistantforAllPeople\">\n     <option value=\"Select\">Select</option>\n     </select>\n     </div>\n     </div>\n\n     \n     <table  id=\"SdhAllPeopleTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>First Name</th>\n     <th>Last Name</th>\n     <th>Phone Number</th>\n     <th>Location</th>\n     <th>Job Title</th>\n     <th>Title</th>\n     <th>Assistant</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdhAllPeopleTbody\">\n     </tbody>\n     </table>\n     </div>\n\n     <div class=\"sdgofficeinfotable oDataTable hide\">\n     <table  id=\"SdgofficeinfoTable\">\n     <thead>\n     <tr>\n     <th>Office</th>\n     <th>Phone</th>\n     <th>Work Address</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdgofficeinfoTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"sdgbillingrateTable oDataTable hide\">\n     <table  id=\"SdgBillingrateTable\">\n     <thead>\n     <tr>\n     <th>Name</th>\n     <th>Satff Function</th>\n     <th>Daily Rate</th>\n     <th>Hourly Rate</th>\n     <th>Effective Date</th>\n     </tr>\n     </thead>\n     <tbody id=\"SdgBillingrateTbody\">\n     </tbody>\n     </table>\n     </div>\n     <div class=\"StaffAvailabilityTable oDataTable hide\">\n     <table id=\"StaffAvailabilityTable\">\n     <thead>\n     <tr><th>User</th><th>Location</th><th>Staff Affiliates</th><th>Availability</th></tr>\n     </thead>\n     <tbody id=\"StaffAvailabilityTbody\"></tbody>\n     </table>\n     </div>\n\n     </div>\n\n     <div class=\"user-profile-page hide\">\n     <!-- <div class=\"title-section\">\n     <h2>Employee Detail</h2>\n     </div> -->\n     <div class=\"user-profile-cover\">\n     <div class=\"cover-bg\">\n     <div class=\"profile-picture-sec\">\n     <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAAvVBMVEXh4eGjo6OkpKSpqamrq6vg4ODc3Nzd3d2lpaXf39/T09PU1NTBwcHOzs7ExMS8vLysrKy+vr7R0dHFxcXX19e5ubmzs7O6urrZ2dmnp6fLy8vHx8fY2NjMzMywsLDAwMDa2trV1dWysrLIyMi0tLTCwsLKysrNzc2mpqbJycnQ0NC/v7+tra2qqqrDw8OoqKjGxsa9vb3Pz8+1tbW3t7eurq7e3t62travr6+xsbHS0tK4uLi7u7vW1tbb29sZe/uLAAAG2UlEQVR4XuzcV47dSAyG0Z+KN+ccO+ecHfe/rBl4DMNtd/cNUtXD6DtLIAhCpMiSXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIhHnfm0cVirHTam884sVu6Q1GvPkf0heq7VE+UF5bt2y97Vat+VlRniev/EVjjp12NlgdEytLWEy5G2hepDYOt7qGob2L23Dd3valPY6dsW+jvaBOKrkm2ldBVrbag+2tYeq1oX6RxYBsF6SY3vA8to8F0roRJaZmFFK2ASWA6CiT6EhuWkoQ9gablZ6l1oW47aWoF8dpvT6FrOunoD5pa7uf6CaslyV6rqD0guzYHLRK/hwJw40Cu4MUdu9Bt8C8yR4Jt+gRbmzEKvUTicFw8kY3NonOg/aJpTTf2AWWBOBTNBkvrmWF+QNDPnZoLUNOeagpKSOVdKhK550BVa5kGLOFfMCxY92ubFuYouNC9CFdyuebKrYrsyL9hcGpgnAxVaXDJPSrGKrGreVFVkU/NmykDJj1sV2Z55s0e74hwtS9k8KvNzxY8ZozvX+L67M4/uVFwT84Kt9CPz6EjFdUqgMyCjCTSHWD4cq7jOzKMzxtGu8ddwxzzaUXHFgXkTxCqwyLyJOON0j9POc/OCpbAj+hU/Zsz9Pbk2T65VbM/mybOKbd882VexjegLPXk0L154uvF/tR5N7RjJB9bvBsLEPJgI5dCcC2P5wL3QlSClJ+bYSSpIqpljh4IkpWNzapzqB3T9vCGBuGUOtWL9hDNPizMYmjND/QIloTkSJvKB4tHRK1iaE0u9hnhgDgxi/QFJZLmLEv0FvbHlbNzTG9ApWa5KHb0J9cByFNT1DhznGOngWO9CvWQ5KdX1AXweWy7Gn/Uh9CLLQdTTCkgPLLODVCshPrSMarHWgUpkGURrl2c83drWbp+0PlRebCsvFW0G+6FtLNzXxlDuXttGrrtlbQPlacvW1ppmCDPOHgJbQ/BwpmyQnh6siHVwcJoqB3iqNx/tHY/N+pPyg7Rz83Xv0n5zuff1ppPKCSS9audf1V6i9QAAAAAAAAAAAAAAAAAAAAAAEMdyAuVeZ9I4H95/uojGgf0QjKOLT/fD88ak0ysrI6SVo9qXRWgrhIsvtaNKqs2hXNlvD0LbSDho71fKWhsxvulf2NYu+jcro42d+e0isMyCxe18R2/D6HQYWY6i4elIryE9brbMgVbzONVP2G3sBeZMsNfYFf5h715302aDIADP2Lw+CIdDQhKcGuIgKKSIk1MSMND7v6zvBvqprdqY3bWfS1itRto/O+52t+KnW+2+OdSYK+5TViS9LxxqyX07p6xUeq7hXl+WPq/AX15QI+9fDryaw5d31EP7HPGqonMb5rmvYwow/upgWTDzKYQ/C2BV3o8oSNTPYVH26FEY7zGDNfnZo0DeOYclwc6jUN4ugBVxZ0HBFp0YJoxaFK41gn7ZGxWYZtDNrSOqEK0dFLscqMbhArXuIioS3UGnHw9U5uEHFCp9quOXUGfrUSFvC11cl0p1nbK+KwHs92yFYyo2DqFEsKdq+wAqhHsqtw+hQHykescY4rnvNOC7g3TPNOEZwt3QiBuINkxpRDqEZFOaMYVgTzTkCWKFGxqyCSHVkqYsIVQQ0ZQogEwJjUkgkvNpjO8g0ZzmzCHRieacIJBLaU7qIE+bBrUhz5YGbSHPmQadIc+EBk0gT48G9SDPPQ06QZ5gQ3M2AQQa0ZwRqtCExz1kClc0ZRVCqFuacguxEhqSQC53pBlHB8HyDY3Y5BDttgnoinRoQgfinZrTuxrxgeodYiiQ+1TOz6HCy4KqLV6gREHVCqjxSsVeociaaq2hyjOVeoYyXarUhTrdZs4VeaQ6j9DIdZsXEhXpU5U+1EqoSALFtlRjC9VGHlXwRlCuTKlAWkK9rEfxehkMCB8o3EMIE1yfovUdrHiKKFb0BEMuPQrVu8CU9xNFOr3DmtcFxVm8wqBsTGHGGUxya4+CeGsHqwZjijEewDAn5Rt9dOdgWzZt6kAqMm/xylpz1EI8i3hF0SxGXQxPvJrTEHXyMuVVTF9QN+WElZuUqKPiyEodC9RV+cbKvJWos0E1TbTe4wB1l89W/GSrWY4G4G4+NUHebhwEkGGYtPgpWskQAkjSXvr8x/xlGz/RKHcr/jOrXYn/1bh0Jh7/mjfpXPALjXC+O/Av7HfzEL+nERbJZME/tpgkRYg/1Mjms48Wf1PrYzbPIIBW8aDY9j/2vsef8vz9R39bDOL/2qlDIwCBGACCOMTLl4klOpP+i4MimFe7DZy7v3rcuaYqej+f3VE1K09+AgAAAAAAAAAAAAAAAAAAAAAAgBf6wsTW1jN3CAAAAABJRU5ErkJggg==\" class=\"profile-picture\">\n     </div>\n     <div class=\"profile-name-section\">\n     <p class=\"profile-user-name\" id=\"UserProfileName\">Sample User</p>\n     <p class=\"profile-user-mail\" id=\"UserProfileEmail\"><span class=\"user-mail-icon\"></span>Sample mail</p>\n     <p class=\"profile-linked-id\" id=\"UserLinkedID\"><span class=\"user-linkedin-icon\"></span>Sample mail</p>\n     </div>\n     </div>\n     <div class=\"user-details-section\">\n     <div class=\"profile-details-left\">\n     <div class=\"user-info\">\n     <label>SDG Affiliation :</label>\n     <div class=\"title-font\" id=\"user-Designation\"></div>\n     </div>\n     <div class=\"user-info\">\n     <label>Staff Function :</label>\n     <div class=\"title-font\" id=\"user-staff-function\"></div>\n     </div>\n\n     </div>\n     <div class=\"profile-details-right\">\n     <div class=\"user-info\">\n     <label id=\"user-phone-l\">Mobile:</label>\n     <div class=\"title-font\" id=\"user-phone\"></div>\n     </div>\n\n     <div class=\"user-info hide\"><label>Personal Email :</label><div class=\"title-font\" id=\"userpersonalmail\"></div></div>\n     \n     </div>\n     </div>\n     </div>\n     <div class=\"user-profile-tabs\">\n     <div class=\"tab-section\">\n     <div class=\"tab-header-section\">\n     <ul class=\"nav nav-tabs\">\n       <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Directory Information</a></li>\n       <li id=\"availabilityTab\"><a data-toggle=\"tab\" href=\"#menu1\">Availability</a></li>\n     </ul>\n\n     </div>\n     <div>\n     <div class=\"tab-content\">\n    <div id=\"home\" class=\"tab-pane fade in active\">\n    <div class=\"text-right dir-edit-sec\" ><button class=\"btn btn-edit\" id=\"btnEdit\">Edit</button></div>\n      <div id=\"DirectoryInformation\" class=\"d-flex view-directory\">\n      <div class=\"DInfo-left col-6\">\n      <div class=\"work-address-view\">\n      <h4>Work Address</h4>\n      <div class=\"d-flex\"><label>Location :</label><div class=\"address-details lblRight\" id=\"WLoctionDetails\"></div></div>\n      <div class=\"d-flex align-item-center\"><label>Address:</label><div class=\"address-details lblRight\" id=\"WAddressDetails\"></div>\n      </div>\n      </div>\n\n      <div class=\"Assistant-view\" id=\"viewAssistant\">\n\n      </div>\n      \n      <div class=\"personal-info-view\">\n      <h4 class=\"personal-info-h\">Personal Info</h4>\n      <div class=\"address-details\" id=\"PersonaInfo\">\n      <div class=\"d-flex\"><label>Home Address :</label><div id=\"PAddLine\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>City:</label><div id=\"PAddCity\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>State:</label><div id=\"PAddState\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>Postal Code :</label><div id=\"PAddPCode\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>Country:</label><div id=\"PAddPCountry\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>Significant Other :</label><div id=\"PSignOther\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label>Children :</label><div id=\"PChildren\" class=\"lblRight\"></div></div>\n      </div>\n      </div>\n      <div class=\"contact-info-view\">\n      <h4 class=\"contact-info-l\">Contact Info</h4>\n      <div class=\"address-details\" id=\"ContactInfo\">\n      <div class=\"d-flex\"><label id=\"homeNoviewl\">Home No :</label><div id=\"homeNoview\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label id=\"emergencyNoviewl\">Emergency No :</label><div id=\"emergencyNoview\" class=\"lblRight\"></div></div>\n      <div class=\"d-flex\"><label id=\"officeNoviewl\">Office No :</label><div id=\"officeNoview\" class=\"lblRight\"></div></div>\n      </div>\n      </div>\n\n\n      <div class=\"StaffStatus-view\">\n      <h4>Staff Status</h4>\n      <p class=\"lblRight\" id=\"staffStatus\"></p>\n      <div id=\"workscheduleViewSec\">\n      <div class=\"d-flex\"><label>Work Schedule</label><p class=\"lblRight\" id=\"workSchedule\"></p></div>\n\n      </div>\n      </div>\n      <div class=\"citizen-info\">\n\n      <div class=\"address-details\" id=\"CitizenInfo\">\n      <div><label>Nationality :</label><label id=\"citizenship\" class=\"lblRight\"></label></div>\n      </div>\n      </div>\n      </div>\n      <div class=\"DInfo-right col-6\">\n      <div class=\"user-billing-rates hide\">\n      <h4>Billing Rate</h4>\n      <div id=\"BillingRateDetails\">\n      <div class=\"billing-rates\"><label>USD Daily Rate</label><div class=\"usd-daily-rate\" id=\"UsdDailyRate\"></div></div>\n      <div class=\"billing-rates\"><label>USD Hourly Rate</label><div class=\"usd-hourly-rate\" id=\"UsdHourlyRate\"></div></div>\n      <div class=\"billing-rates\"><label>EUR Daily Rate</label><div class=\"eur-daily-rate\" id=\"EURDailyRate\"></div></div>\n      <div class=\"billing-rates\"><label>EUR Hourly Rate</label><div class=\"eur-hourly-rate\" id=\"EURHourlyRate\"></div></div>\n      <div class=\"billing-effective-date\"><label>Effective Date</label><div class=\"effective-date\" id=\"EffectiveDate\"></div></div>\n      <div class=\"billing-rates\"><label>Comments</label><div class=\"w-100\"><textarea class=\"Billing-comments\" id=\"BillingRateComments\"></textarea></div></div>\n      </div>\n      </div>\n      <div class=\"Biography-Experience-view\">\n      <h4>Biography and Experience</h4>\n      <div class=\"address-details\" id=\"BioExp\">\n      <h5 id=\"shortbioh\">Short Bio</h5>\n      <p id=\"shortbio\" class=\"lblRight\"></p>\n      <h5 id=\"bioAttachhead\">Bio Attachment(s)</h5>\n      <div class=\"bio-attachment-section\" id=\"bioAttachment\"></div>\n      <div class=\"other-exp-view\">\n      <h5 class=\"other-exp-h\">Other Experience Details</h5>\n      <div class=\"exp\">\n      <div class=\"\"><label id=\"IndustryExpl\">Industries</label>\n      <p id=\"IndustryExp\" class=\"lblRight\"></p>\n      </div>\n      <div class=\"\"><label id=\"LanguageExpl\">Languages</label>\n      <p id=\"LanguageExp\" class=\"lblRight\"></p>\n      </div>\n      </div>\n      <div class=\"exp\">\n      <div class=\"\"><label id=\"SDGCoursel\">Courses</label>\n      <p id=\"SDGCourse\" class=\"lblRight\"></p>\n      </div>\n      <div class=\"\"><label id=\"SoftwareExpl\">Software</label>\n      <p id=\"SoftwareExp\" class=\"lblRight\"></p>\n      </div>\n      </div>\n      <div class=\"exp\">\n      <div class=\"\"><label id=\"MembershipExpl\">Memberships</label>\n      <p id=\"MembershipExp\" class=\"lblRight\"></p>\n      </div>\n      <div class=\"\"><label id=\"SpecialKnowledgel\">Special Knowledge</label>\n      <p id=\"SpecialKnowledge\" class=\"lblRight\"></p>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      <div id=\"DirectoryInformationEdit\" class=\"edit-directory hide\">\n      <div class=\"d-flex\">\n      <div class=\"DInfo-left col-6\">\n      <div class=\"work-address\">\n      <h4>Work Address</h4>\n      <div class=\"address-details d-flex\" id=\"editWorAddress\">\n      <label>Location</label>\n      <div class=\"w-100\"><select id=\"workLocationDD\"></select></div>\n      </div>\n      <div class=\"Location-Addresses d-flex\">\n      <label>Location Address</label>\n      <div class=\"address-details lblRight w-100\" id=\"EditedAddressDetails\">\n\n      </div>\n      </div>\n      </div>\n      <div class=\"staff-function-edit-info\">\n      <div class=\"d-flex\">\n      <label>Staff Function</label>\n      <div class=\"w-100\"><select id=\"StaffFunctionEdit\"></select></div>\n      </div>\n      </div>\n      <div class=\"staff-affiliates-edit-info\">\n      <div class=\"d-flex\">\n      <label>Staff Affiliates</label>\n      <div class=\"w-100\"><select id=\"StaffAffiliatesEdit\"></select></div>\n      </div>\n      </div>\n      <div class=\"assisstant-info\">\n      <h4>Assisstant</h4>\n      <div class=\"assisstant-name d-flex\">\n      <label>Name</label>\n      <div class=\"w-100\"><div id=\"peoplepickerText\" title=\"APickerField\"></div></div>\n\n      </div>\n      </div>\n      <div class=\"personal-info\">\n      <h4>Personal Info</h4>\n      <div class=\"address-details\" id=\"PersonaInfo\">\n      <div class=\"d-flex\"><label>Home Address:</label><div class=\"w-100\"><input type=\"text\" id=\"PAddLineE\"></div></div>\n      <div class=\"d-flex\"><label>City:</label><div class=\"w-100\"><input type=\"text\" id=\"PAddCityE\"></div></div>\n      <div class=\"d-flex\"><label>State:</label><div class=\"w-100\"><input type=\"text\" id=\"PAddStateE\"></div></div>\n      <div class=\"d-flex\"><label>Postal Code:</label><div class=\"w-100\"><input type=\"text\" id=\"PAddPCodeE\"></div></div>\n      <div class=\"d-flex\"><label>Country:</label><div class=\"w-100\"><input type=\"text\" id=\"PAddCountryE\"></div></div>\n      </div>\n      </div>\n\n      <div class=\"contact-info\">\n      <h4>Contact Info</h4>\n      <div class=\"address-details\" id=\"ContactInfo\">\n      <div class=\"d-flex\"><label>Personal Mail :</label><div class=\"w-100\"><input type=\"text\" id=\"personalmailID\"></div></div>\n      <div class=\"d-flex\"><label>Mobile No :</label><div class=\"w-100\" id =\"mobileNoSec\"><div class=\"d-flex mobNumbers\"><select class=\"mobNoCode\"></select><input type=\"number\" class=\"mobNo\" id=\"mobileno1\"/><span class=\"addMobNo add-icon\"></span></div></div></div>\n      <div class=\"d-flex\"><label>Home No :</label><div class=\"w-100\" id=\"homeNoSec\"><div class=\"d-flex homeNumbers\"><select class=\"homeNoCode\"></select><input type=\"number\" class=\"homeno\" id=\"homeno\"/><span class=\"addHomeNo add-icon\"></span></div></div></div>\n      <div class=\"d-flex\"><label>Emergency No :</label><div class=\"w-100\" id=\"emergencyNoSec\"><div class=\"d-flex emergencyNumbers\"><select class=\"emergencyNoCode\"></select><input type=\"number\" class=\"emergencyno\" id=\"emergencyno\" /><span class=\"addEmergencyNo add-icon\"></span></div></div></div>\n      <div class=\"d-flex\"><label>Office No :</label><div class=\"w-100\" id=\"officeNoSec\"><div class=\"d-flex officeNumbers\"><select class=\"officeNoCode\"></select><input type=\"number\" class=\"officeno\" id=\"officeno\"/><span class=\"addOfficeNo add-icon\"></span></div></div></div>\n\n      <div class=\"d-flex\"><label>Significant Other :</label><div class=\"w-100\"><textarea id=\"significantOther\"></textarea></div></div>\n      <div class=\"d-flex\"><label>Children :</label><div class=\"w-100\"><textarea id=\"children\"></textarea></div></div>\n      <div class=\"d-flex\"><label>LinkedIn ID :</label><div class=\"w-100\"><input type=\"text\" id=\"linkedInID\"></div></div>\n      </div>\n      </div>\n\n\n\n      <div class=\"StaffStatus\">\n      <h4>Staff Status</h4>\n      <div class=\"d-flex w-100\">\n      <label>Status</label><div class=\"w-100\"><select id=\"staffstatusDD\"></select></div></div>\n      <div id=\"workscheduleEdit\">\n      <div class=\"d-flex w-100 hide\" id=\"workscheduleSec\">\n      <label>Work Schedule</label>\n      <div class=\"w-100\"><input type=\"text\" id=\"workScheduleE\"></div>\n      </div>\n      </div>\n      </div>\n      <div class=\"citizen-info\">\n      <div class=\"address-details\" id=\"CitizenInfo\">\n      <div class=\"d-flex w-100\"><label>Nationality:</label><div class=\"w-100\"><input type=\"text\" id=\"citizenshipE\"></div></div>\n      </div>\n      </div>\n      </div>\n\n      <div class=\"DInfo-right col-6\">\n      <div class=\"user-billing-rates hide\">\n      <h4>Billing Rate</h4>\n      <div id=\"BillingRateDetailsView\" class=\"hide\">\n      <div id=\"BillingRateDetails\">\n      <div class=\"billing-rates\"><label>USD Daily Rate</label><div class=\"usd-daily-rate\" id=\"UsdDailyRate\"></div></div>\n      <div class=\"billing-rates\"><label>USD Hourly Rate</label><div class=\"usd-hourly-rate\" id=\"UsdHourlyRate\"></div></div>\n      <div class=\"billing-rates\"><label>EUR Daily Rate</label><div class=\"eur-daily-rate\" id=\"EURDailyRate\"></div></div>\n      <div class=\"billing-rates\"><label>EUR Hourly Rate</label><div class=\"eur-hourly-rate\" id=\"EURHourlyRate\"></div></div>\n      <div class=\"billing-effective-date\"><label>Effective Date</label><div class=\"effective-date\" id=\"EffectiveDate\"></div></div>\n      <div class=\"billing-rates\"><label>Comments</label><div class=\"w-100\"><textarea class=\"Billing-comments\" id=\"BillingRateComments\"></textarea></div></div>\n      </div>\n      </div>\n\n      <div id=\"BillingRateDetailsEdit\" class=\"hide\">\n      <div id=\"BillingRateDetails\">\n      <div class=\"billing-rates\"><label>USD Daily Rate</label><div class=\"usd-daily-rate\"></div><input type=\"number\" id=\"USDDailyEdit\"/></div>\n      <div class=\"billing-rates\"><label>USD Hourly Rate</label><div class=\"usd-hourly-rate\"></div><input type=\"number\" id=\"USDHourlyEdit\" disabled/></div>\n      <div class=\"billing-rates\"><label>EUR Daily Rate</label><div class=\"eur-daily-rate\"></div><input type=\"number\" id=\"EURDailyEdit\"/></div>\n      <div class=\"billing-rates\"><label>EUR Hourly Rate</label><div class=\"eur-hourly-rate\"></div><input type=\"number\" id=\"EURHourlyEdit\" disabled/></div>\n      <div class=\"billing-rates\"><label>Other Currency</label><div class=\"eur-hourly-rate\"></div><select id=\"othercurrDD\"></select></div>\n      <div class=\"billing-rates\"><label>Daily Rate</label><div class=\"eur-hourly-rate\"></div><input type=\"number\" id=\"ODailyEdit\"/></div>\n      <div class=\"billing-rates\"><label>Hourly Rate</label><div class=\"eur-hourly-rate\"></div><input type=\"number\" id=\"OHourlyEdit\" disabled/></div>\n      <div class=\"billing-effective-date\"><label>Effective Date</label><div class=\"effective-date\"><input type=\"date\" id=\"EffectiveDateEdit\"/></div></div>\n      <div class=\"billing-rates\"><label>Comments</label><div class=\"w-100\"><textarea class=\"Billing-comments\" id=\"BillingRateCommentsEdit\"></textarea></div></div>\n      </div></div>\n      </div>\n      <div class=\"Biography-Experience\">\n      <h4>Biography and Experience</h4>\n      <div class=\"address-details\" id=\"BioExp\">\n      <h5>Short Bio</h5>\n      <div><textarea id=\"Eshortbio\"></textarea></div>\n      <h5>Bio Attachment(s)</h5>\n      <div class=\"bio-attachment-section\" id=\"bioAttachment\">\n      <div class=\"custom-file\">\n<input type=\"file\" name=\"myFile\" id=\"BioAttachEdit\" multiple class=\"custom-file-input\">\n<label class=\"custom-file-label\" for=\"BioAttachEdit\">Choose File</label>\n</div>\n<div class=\"quantityFilesContainer quantityFilesContainer-static\" id=\"filesfromfolder\"></div>\n<div class=\"quantityFilesContainer quantityFilesContainer-static\" id=\"otherAttachmentFiles\"></div>\n\n      </div>\n      <div class=\"other-exp\">\n      <h5>Other Experience Details</h5>\n      <div class=\"exp\">\n      <div class=\"\"><label>Industries</label>\n      <div><textarea id=\"EIndustry\"></textarea></div>\n      </div>\n      <div class=\"\"><label>Languages</label>\n      <div><textarea id=\"ELanguage\"></textarea></div>\n      </div>\n      </div>\n      <div class=\"exp\">\n      <div class=\"\"><label>Courses</label>\n      <div><textarea id=\"ESDGCourse\"></textarea></div>\n      </div>\n      <div class=\"\"><label>Software</label>\n      <div><textarea id=\"ESoftwarExp\"></textarea></div>\n      </div>\n      </div>\n      <div class=\"exp\">\n      <div class=\"\"><label>Memberships</label>\n      <div><textarea id=\"EMembership\"></textarea></div>\n      </div>\n      <div class=\"\"><label>Special Knowledge</label>\n      <div><textarea id=\"ESKnowledge\"></textarea></div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n\n      </div>\n      <div class=\"btn-section\">\n      <button class=\"btn btn-cancel\" id=\"BtnCancel\">Cancel</button>\n      <button class=\"btn btn-submit\" id=\"BtnSubmit\">Submit</button>\n      </div>\n      </div>\n    </div>\n    <div id=\"menu1\" class=\"tab-pane fade\">\n      <div class=\"view-availability\">\n      <div class=\"availability-btn-section\">\n      <button class=\"btn btn-add-project\"  data-toggle=\"modal\" data-target=\"#addprojectmodal\">Add Project</button>\n      </div>\n      <div class=\"availability-table-section\">\n      <table id=\"UserAvailabilityTable\">\n      <thead>\n      <tr>\n      <th>Project Name</th>\n      <th>Start Date</th>\n      <th>End Date</th>\n      <th>Percentage</th>\n      <th>Comments</th>\n      <th>Action</th>\n      </tr>\n      </thead>\n      <tbody id=\"UserAvailabilityTbody\">\n      </tbody >\n      </table>\n      </div>\n      </div>\n\n\n      <div class=\"modal fade\" id=\"addprojectmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addprojectmodalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Project</h5>\n\n      </div>\n      <div class=\"modal-body add-project-modal\">\n      <div class=\"d-flex\">\n      <div class=\"d-flex col-6\"><label>Project Type</label><div class=\"w-100\"><select id=\"projecttypeDD\"><option value=\"sample\">Sample</option></select></div></div>\n      <div class=\"d-flex col-6\"><label>Project Name</label><div class=\"w-100\"><input type=\"text\" id=\"projectName\" /></div></div>\n      </div>\n      <div class=\"d-flex\">\n      <div class=\"d-flex col-6\"><label>Start Date</label><div class=\"w-100\"><input type=\"date\" id=\"projectStartDate\" /></div></div>\n        <div class=\"d-flex col-6\"><label>End Date</label><div class=\"w-100\"><input type=\"date\" id=\"projectEndDate\" /></div></div>\n      </div>\n        <div class=\"d-flex\">\n        <div class=\"d-flex col-6\"><div id=\"percentageDiv\" class=\"d-flex w-100\"><label>Percent on Project</label><div class=\"w-100\"><input type=\"text\" id=\"projectPercent\" /></div></div></div>\n\n        </div>\n\n        <div class=\"d-flex\">\n        <div class=\"d-flex col-6\"><label>Client</label><div class=\"w-100\"><input type=\"text\" id=\"client\" /></div></div>\n        <div class=\"d-flex col-6\"><label>Project Code</label><div class=\"w-100\"><input type=\"text\" id=\"projectCode\" /></div></div>\n        </div>\n\n        <div class=\"d-flex\">\n        <div class=\"d-flex col-6\"><label>Practice Area</label><div class=\"w-100\"><select id=\"practiceAreaDD\"><option value=\"sample\">Sample</option></select></div></div>\n        <div class=\"d-flex col-6\"><label>Project Location</label><div class=\"w-100\"><input type=\"text\" id=\"ProjectLocation\" /></div></div>\n        </div>\n        <div class=\"d-flex\">\n        <div class=\"d-flex col-6\"><div id=\"OtherPracticeAreaDiv\" class=\"d-flex w-100\"><label>Others</label><div class=\"w-100\"><input type=\"text\" id=\"OtherPracticeArea\" /></div></div></div>\n\n        </div>\n        <div class=\"d-flex\">\n        <div class=\"d-flex col-6\"><label>Availability Notes</label><div class=\"w-100\"><textarea id=\"projectAvailNotes\" ></textarea></div></div>\n        <div class=\"d-flex col-6\"><label>Comments</label><div class=\"w-100\"><textarea id=\"Projectcomments\"></textarea></div></div></div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-cancel\" data-dismiss=\"modal\" id=\"closeModal\">Close</button>\n        <button type=\"button\" class=\"btn btn-submit\" id=\"add-availability\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n    </div>\n    </div>\n    </div>\n     </div>\n     </div>\n     </div>\n     </div>\n     ";
        var username = document.querySelectorAll(".usernametag");
        var userpage = document.querySelector(".user-profile-page");
        var tableSection = document.querySelector(".sdh-employee");
        var viewDir = document.querySelector(".view-directory");
        var editDir = document.querySelector(".edit-directory");
        var editbtn = document.querySelector(".btn-edit");
        // ! Side Nav Click Action
        {
            $(".clsToggleCollapse").click(function () {
                $(".clsCollapse").each(function () {
                    $(this).removeClass("in").attr("style", "");
                });
                $(this).next("div").addClass("in");
            });
            onLoadData();
            getGroups();
            ActiveSwitch();
            // $('.usernametag').on( 'click', function () {
            // });
            $(".SDHEmployee").click(function () {
                SelectedUserProfile = [];
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindEmpTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindEmpTable(options);
                }
            });
            $(".OutsidConsultant").click(function () {
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindOutTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindOutTable(options);
                }
            });
            $(".SDHAffiliates").click(function () {
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAffTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAffTable(options);
                }
            });
            $(".SDHAlumini").click(function () {
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAlumTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAlumTable(options);
                }
            });
            $(".SDHShowAll").click(function () {
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAllDetailTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindAllDetailTable(options);
                }
            });
            $(".SDGOfficeInfo").click(function () {
                if (viewDir.classList["contains"]("hide")) {
                    viewDir.classList.remove("hide");
                    editDir.classList.add("hide");
                    editbtn.classList.remove("hide");
                }
                if (tableSection.classList.contains("hide")) {
                    tableSection.classList.remove("hide");
                    userpage.classList.add("hide");
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindOfficeTable(options);
                }
                else {
                    var options = {
                        destroy: true,
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindOfficeTable(options);
                }
            });
        }
        // Employee Filters
        $(".sdhLocgrouping").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(4, "SdhEmpTable", bindEmpTable);
        });
        $(".sdhTitlgrouping").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(6, "SdhEmpTable", bindEmpTable);
        });
        $(".sdhAssistantgrouping").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(7, "SdhEmpTable", bindEmpTable);
        });
        $(".sdhfirstnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindEmpTable(options);
        });
        $(".sdhlastnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindEmpTable(options);
        });
        //OutSideConsultant
        $(".OutConslastnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindOutTable(options);
        });
        $(".OutConsFirstnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindOutTable(options);
        });
        $(".OutConsLocgrouping").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(4, "SdhOutsideTable", bindOutTable);
        });
        $(".OutConsStaffgrouping").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(6, "SdhOutsideTable", bindOutTable);
        });
        // Affliates
        $(".Afflastnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAffTable(options);
        });
        $(".AffFirstnamesort").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindStaffAvailTable(options);
        });
        // Allumni
        $(".SDHAlumniLastName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAlumTable(options);
        });
        $(".SDHAlumniFirstName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAlumTable(options);
        });
        $(".SDHAlumniOffice").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            SdhEmpTableRowGrouping(4, "SdhAllumniTable", bindAlumTable);
        });
        // All Users
        $(".SDHShowAllLastName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAllDetailTable(options);
        });
        $(".SDHShowAllFirstName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAllDetailTable(options);
        });
        $(".StaffAvailability").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[0, "asc"]],
                lengthMenu: [50, 100],
            };
            bindAllDetailTable(options);
        });
        $(".SDGBillingRate").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[0, "asc"]],
                lengthMenu: [50, 100],
            };
            bindBillingRateTable(options);
        });
        $(".SDGBillingRateLastName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindBillingRateTable(options);
        });
        $(".SDGBillingRateFirstName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindBillingRateTable(options);
        });
        $(".SDGOfficeInfoFirstName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[1, "asc"]],
                lengthMenu: [50, 100],
            };
            bindOfficeTable(options);
        });
        $(".SDGOfficeInfoLastName").click(function () {
            if (viewDir.classList["contains"]("hide")) {
                viewDir.classList.remove("hide");
                editDir.classList.add("hide");
                editbtn.classList.remove("hide");
            }
            if (tableSection.classList.contains("hide")) {
                tableSection.classList.remove("hide");
                userpage.classList.add("hide");
            }
            var options = {
                destroy: true,
                order: [[2, "asc"]],
                lengthMenu: [50, 100],
            };
            bindOfficeTable(options);
        });
        $("#btnEdit").click(function () {
            editFunction();
        });
        $("#BtnSubmit").click(function () {
            editsubmitFunction();
        });
        $("#BtnCancel").click(function () {
            editcancelFunction();
        });
        $("#add-availability").click(function () {
            if (mandatoryforaddaction()) {
                if (AvailEditFlag) {
                    availUpdateFunc();
                }
                else {
                    availSubmitFunc();
                }
            }
            else {
                console.log("All fileds not filled");
            }
        });
        $(document).on("change", "#BioAttachEdit", function () {
            if ($(this)[0].files.length > 0) {
                for (var index = 0; index < $(this)[0].files.length; index++) {
                    var file = $("#BioAttachEdit")[0]["files"][index];
                    // if (ValidateSingleInput($("#others")[0])) {
                    bioAttachArr.push(file);
                    $("#otherAttachmentFiles").append('<div class="quantityFiles">' +
                        "<span class=upload-filename>" +
                        file.name +
                        "</span>" +
                        "<a filename='" +
                        file.name +
                        "' class=clsRemove href='#'>x</a></div>");
                    // }
                }
                $(this).val("");
                $(this).parent().find("label").text("Choose File");
            }
        });
        $(document).on("click", ".clsRemove", function () {
            //var filename=$(this).attr('filename');
            var filename = $(this).parent().children()[0].innerText;
            removeSelectedfile(filename);
            $(this).parent().remove();
        });
        $(document).on("click", ".remove-icon", function () {
            $(this).parent().remove();
        });
        $(document).on("click", ".action-delete", function (e) {
            var AItemID = e.currentTarget.getAttribute("data-id");
            alertify.confirm("Are you sure want to delete", function () {
                removeAvailProject(parseInt(AItemID));
                e.currentTarget.parentElement.parentElement.parentElement.remove();
            }, function () {
                alertify.error('Cancel');
            });
        });
        $(document).on("change", "#staffstatusDD", function () {
            if ($("#staffstatusDD").val() == "Part-time") {
                $("#workscheduleSec").removeClass("hide");
            }
            else if ($("#staffstatusDD").val() == "Full-time") {
                $("#workscheduleSec").addClass("hide");
                $("#workscheduleSec").val("");
            }
        });
        $(document).on("change", "#workLocationDD", function () {
            $("#EditedAddressDetails").html(OfficeAddArr.filter(function (add) { return $("#workLocationDD").val() == add.OfficePlace; })[0].OfficeFullAdd);
        });
        $(document).on("change", "#projecttypeDD", function () {
            if ($("#projecttypeDD").val() == "Billable/Client" || $("#projecttypeDD").val() == "Marketing") {
                $("#percentageDiv").removeClass("hide");
            }
            else {
                $("#projectPercent").val("");
                $("#percentageDiv").addClass("hide");
            }
        });
        $(document).on("change", "#practiceAreaDD", function () {
            if ($("#practiceAreaDD").val() == "Others, please specify") {
                $("#OtherPracticeAreaDiv").removeClass("hide");
            }
            else {
                $("#OtherPracticeArea").val("");
                $("#OtherPracticeAreaDiv").addClass("hide");
            }
        });
        $(document).on("click", "#editProjectAvailability", function (e) {
            AvailEditFlag = true;
            var AEditItemID = e.currentTarget.getAttribute("data-id");
            AvailEditID = AEditItemID;
            fillEditSection(AvailEditID);
        });
        $(document).on("click", "#closeModal", function () {
            AvailEditFlag = false;
            AvailEditID = 0;
            $("#projectName").val("");
            $("#projectStartDate").val("");
            $("#projectEndDate").val("");
            $("#projectPercent").val("");
            $("#practiceAreaDD").val("");
            $("#projecttypeDD").val("");
            $("#client").val("");
            $("#projectCode").val("");
            $("#ProjectLocation").val("");
            $("#OtherPracticeArea").val("");
            $("#projectAvailNotes").val("");
            $("#Projectcomments").val("");
        });
        $(document).on("click", ".usernametag", function () {
            if (SelectedUserProfile[0].Affiliation != "Employee" && SelectedUserProfile[0].Affiliation != "Outside Consultant") {
                $("#menu1").addClass("hide");
                $("#availabilityTab").addClass("hide");
            }
            else {
                $("#menu1").removeClass("hide");
                $("#availabilityTab").removeClass("hide");
            }
        });
    };
    Object.defineProperty(StaffdirectoryWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    StaffdirectoryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return StaffdirectoryWebPart;
}(BaseClientSideWebPart));
export default StaffdirectoryWebPart;
var onLoadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var LocOptionHtml, LocDDHtml, staffOptionHtml, otherCurrHtml, StaffFunHtml, StaffDDHtml, StaffAffHtml, AvailProjTypeHtml, AvailPracAreaDD, listLocation, listStaffStatus, listOtherCurr, CountryCode, listStaffFunction, listStaffAff, AvailProjectType, AvailPracticeArea;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                LocOptionHtml = "";
                LocDDHtml = "<option value='Select'>Select</option>";
                staffOptionHtml = "";
                otherCurrHtml = "";
                StaffFunHtml = "";
                StaffDDHtml = "<option value='Select'>Select</option>";
                StaffAffHtml = "";
                AvailProjTypeHtml = "";
                AvailPracAreaDD = "";
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'SDGOffice'").get()];
            case 1:
                listLocation = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'StaffStatus'").get()];
            case 2:
                listStaffStatus = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'OtherCurrency'").get()];
            case 3:
                listOtherCurr = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'CountryCode'").get()];
            case 4:
                CountryCode = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'stafffunction'").get()];
            case 5:
                listStaffFunction = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").fields.filter("EntityPropertyName eq 'SDGAffiliation'").get()];
            case 6:
                listStaffAff = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "SDGAvailability").fields.filter("EntityPropertyName eq 'ProjectType'").get()];
            case 7:
                AvailProjectType = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "SDGAvailability").fields.filter("EntityPropertyName eq 'ProjectArea'").get()];
            case 8:
                AvailPracticeArea = _a.sent();
                //ProjectType-Load
                AvailProjectType[0]["Choices"].forEach(function (type) {
                    AvailProjTypeHtml += "<option value=\"" + type + "\">" + type + "</option>";
                });
                //ProjectArea-Load
                AvailPracticeArea[0]["Choices"].forEach(function (Area) {
                    AvailPracAreaDD += "<option value=\"" + Area + "\">" + Area + "</option>";
                });
                //Location-Load
                listLocation[0]["Choices"].forEach(function (li) {
                    LocOptionHtml += "<option value=\"" + li + "\">" + li + "</option>";
                    LocDDHtml += "<option value=\"" + li + "\">" + li + "</option>";
                });
                //Status-Load
                listStaffStatus[0]["Choices"].forEach(function (stff) {
                    staffOptionHtml += "<option value=\"" + stff + "\">" + stff + "</option>";
                });
                //OtherCurrency-Load
                listOtherCurr[0]["Choices"].forEach(function (curr) {
                    otherCurrHtml += "<option value=\"" + curr + "\">" + curr + "</option>";
                });
                //CountryCode - Load
                CountryCode[0]["Choices"].forEach(function (CCode) {
                    CCodeArr.push(CCode);
                    CCodeHtml += "<option value=\"" + CCode + "\">" + CCode + "</option>";
                });
                //StaffFunction - Load
                listStaffFunction[0]["Choices"].forEach(function (func) {
                    StaffFunHtml += "<option value=\"" + func + "\">" + func + "</option>";
                    StaffDDHtml += "<option value=\"" + func + "\">" + func + "</option>";
                });
                //Affliation - Load
                listStaffAff[0]["Choices"].forEach(function (Aff) {
                    StaffAffHtml += "<option value=\"" + Aff + "\">" + Aff + "</option>";
                });
                $('#projecttypeDD').html(AvailProjTypeHtml);
                $("#practiceAreaDD").html(AvailPracAreaDD);
                $('#workLocationDD').html(LocOptionHtml);
                $('#staffstatusDD').html(staffOptionHtml);
                $('#othercurrDD').html(otherCurrHtml);
                $("#StaffFunctionEdit").html(StaffFunHtml);
                $("#StaffAffiliatesEdit").html(StaffAffHtml);
                $(".mobNoCode,.homeNoCode,.emergencyNoCode,.officeNoCode").html(CCodeHtml);
                $("#drpTitleforEmployee,#drpTitleforOutside,#drpTitleforAffiliates,#drpTitleforAlumni,#drpTitleforAllPeople").html(StaffDDHtml);
                $("#drpLocationforEmployee,#drpLocationforOutside,#drpLocationforAffiliates,#drpLocationforAlumni,#drpLocationforAllPeople").html(LocDDHtml);
                return [4 /*yield*/, sp.web.getFolderByServerRelativeUrl("/sites/StaffDirectory/ProfilePictures").files.select("*,listItemAllFields").expand("listItemAllFields").get()];
            case 9:
                ProfilePics = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "SDGAvailability").items.select("*,UserName/Title,UserName/EMail,UserName/Id").expand("UserName").top(5000).get()];
            case 10:
                AllAvailabilityDetails = _a.sent();
                return [4 /*yield*/, sp.web.getList(listUrl + "StaffDirectory").items.select("*", "User/EMail", "User/Title", "User/FirstName", "User/LastName", "User/JobTitle", "User/UserName", "Assistant/EMail", "Assistant/Title", "User/Id").expand("User,Assistant").get().then(function (listitem) {
                        listitem.forEach(function (li) {
                            var userPercentage = 0;
                            var userpic = ProfilePics.filter(function (p) { return p.ListItemAllFields.UserName && li.User.UserName ? p.ListItemAllFields.UserName.toLowerCase() == li.User.UserName.toLowerCase() : ""; });
                            AllAvailabilityDetails.forEach(function (all) {
                                all.UserName.EMail == li.User.EMail && new Date(all.StartDate) <= new Date() && new Date(all.EndDate) >= new Date() ? userPercentage += parseInt(all.Percentage) : userPercentage += 0;
                            });
                            UserDetails.push({
                                Name: li.User.Title ? li.User.Title : "",
                                FirstName: li.User.FirstName ? li.User.FirstName : "",
                                LastName: li.User.LastName ? li.User.LastName : "",
                                Usermail: li.User.UserName ? li.User.UserName : "",
                                UserPersonalMail: li.PersonalEmail ? li.PersonalEmail : "",
                                JobTitle: li.User.JobTitle ? li.User.JobTitle : "",
                                Assistant: li.Assistant ? li.Assistant.Title : "",
                                AssistantMail: li.Assistant ? li.Assistant.EMail : "",
                                PhoneNumber: li.MobileNo ? li.MobileNo : "",
                                Location: li.SDGOffice ? li.SDGOffice : "",
                                Title: li.stafffunction ? li.stafffunction : "",
                                Affiliation: li.SDGAffiliation ? li.SDGAffiliation : "",
                                HAddLine: li.HomeAddLine ? li.HomeAddLine : "",
                                HAddCity: li.HomeAddCity ? li.HomeAddCity : "",
                                HAddState: li.HomeAddState ? li.HomeAddState : "",
                                HAddPCode: li.HomeAddPCode ? li.HomeAddPCode : "",
                                HAddPCountry: li.HomeAddCountry ? li.HomeAddCountry : "",
                                ShortBio: li.ShortBio ? li.ShortBio : "",
                                Citizen: li.Citizenship ? li.Citizenship : "",
                                Industry: li.IndustryExp ? li.IndustryExp : "",
                                Language: li.LanguageExp ? li.LanguageExp : "",
                                SDGCourse: li.SDGCourses ? li.SDGCourses : "",
                                Software: li.SoftwareExp ? li.SoftwareExp : "",
                                Membership: li.Membership ? li.Membership : "",
                                SpecialKnowledge: li.SpecialKnowledge ? li.SpecialKnowledge : "",
                                USDDaily: li.USDDailyRate,
                                USDHourly: li.USDHourlyRate,
                                EURDaily: li.EURDailyRate,
                                EURHourly: li.EURHourlyRate,
                                OtherCurr: li.OtherCurrency,
                                OtherCurrDaily: li.ODailyRate,
                                OtherCurrHourly: li.OHourlyRate,
                                EffectiveDate: li.EffectiveDate ? li.EffectiveDate : "",
                                BillingRateComments: li.BillingRateComments,
                                StaffStatus: li.StaffStatus ? li.StaffStatus : "",
                                WorkSchedule: li.WorkingSchedule ? li.WorkingSchedule : "",
                                ItemID: li.ID ? li.ID : "",
                                LinkedInID: li.LinkedInLink ? li.LinkedInLink : "",
                                SignOther: li.signother ? li.signother : "",
                                Child: li.children ? li.children : "",
                                HomeNo: li.HomeNo ? li.HomeNo : "",
                                EmergencyNo: li.EmergencyNo ? li.EmergencyNo : "",
                                OfficeNo: li.OfficeNo ? li.OfficeNo : "",
                                UserId: li.User.Id,
                                ProfilePic: userpic[0].ServerRelativeUrl,
                                Availability: 100 - userPercentage
                            });
                        });
                        getTableData();
                    })];
            case 11:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var ActiveSwitch = function () {
    var navItems = document.querySelectorAll(".nav-items");
    navItems.forEach(function (li) {
        li.addEventListener("click", function (e) {
            var activeClass = document.querySelectorAll(".nav-items");
            activeClass.forEach(function (activeC) {
                activeC["classList"].remove("show");
            });
            var selectedOption = e.currentTarget;
            e.currentTarget["classList"].toggle("show");
            var activeTable = document.querySelectorAll(".oDataTable");
            activeTable.forEach(function (tables) {
                if (!tables.classList.contains("hide")) {
                    tables.classList.add("hide");
                }
                selectedOption["classList"].contains("SDHEmployee")
                    ? $(".sdh-emp-table").removeClass("hide")
                    : selectedOption["classList"].contains("OutsidConsultant")
                        ? $(".sdh-outside-table").removeClass("hide")
                        : selectedOption["classList"].contains("SDHAffiliates")
                            ? $(".sdh-Affilate-table").removeClass("hide")
                            : selectedOption["classList"].contains("SDHAlumini")
                                ? $(".sdh-Allumni-table").removeClass("hide")
                                : selectedOption["classList"].contains("SDHShowAll")
                                    ? $(".sdh-AllPeople-table").removeClass("hide")
                                    : selectedOption["classList"].contains("SDGOfficeInfo")
                                        ? $(".sdgofficeinfotable").removeClass("hide")
                                        : selectedOption["classList"].contains("SDGBillingRate")
                                            ? $(".sdgbillingrateTable").removeClass("hide")
                                            : selectedOption["classList"].contains("StaffAvailability") ? $(".StaffAvailabilityTable").removeClass("hide") : "";
            });
        });
    });
};
function getTableData() {
    return __awaiter(this, void 0, void 0, function () {
        var OfficeTable, EmpTable, OutTable, AffTable, AlumTable, AllDetailsTable, BillingRateTable, AvailHtml, AssDDHtml, drpArray, drpAss, i, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    OfficeTable = "";
                    EmpTable = "";
                    OutTable = "";
                    AffTable = "";
                    AlumTable = "";
                    AllDetailsTable = "";
                    BillingRateTable = "";
                    AvailHtml = "";
                    AssDDHtml = "<option value='Select'>Select</option>";
                    drpArray = [];
                    drpAss = [];
                    return [4 /*yield*/, sp.web.getList(listUrl + "SDGOfficeInfo").items.get()];
                case 1:
                    OfficeDetails = _a.sent();
                    OfficeDetails.forEach(function (oDetail) {
                        OfficeTable += "<tr><td>" + oDetail.Office + "</td><td>" + (oDetail.Phone != "null" ? oDetail.Phone.split("^").join("</br>") : "") + "</td><td>" + (oDetail.Address != "null" ? oDetail.Address.split("^").join("</br>") : "") + "</td></tr>";
                    });
                    //Availablity Table -Load 
                    UserDetails.forEach(function (avli) {
                        AvailHtml += "<tr><td>" + avli.Name + "</td>\n      <td>" + avli.Location + "</td>\n      <td>" + avli.Affiliation + "</td>\n      <td>\n      <div class=\"d-flex align-item-center\">\n      <div class=\"availability-progress-bar\" style=\"border: 1px solid  " + (avli.Availability >= 50 ? "#f01616" : "#45b345") + "\">\n      <div class=\"progress-value\" style=\"height:100%;width:" + (100 - avli.Availability) + "%; background: " + (avli.Availability >= 50 ? "#f01616" : "#45b345") + "\"></div>\n      </div>\n      <span style=\"color:" + (avli.Availability >= 50 ? "#f01616" : "#45b345") + "\">" + (100 - avli.Availability) + "%</span></div>\n      </td></tr>";
                    });
                    $('#StaffAvailabilityTbody').html(AvailHtml);
                    UserDetails.forEach(function (details) {
                        var ViewPhoneNumber = details.PhoneNumber.split("^");
                        ViewPhoneNumber.pop();
                        if (details.Affiliation == "Employee") {
                            EmpTable += "<tr><td class=\"user-details-td\"><div class=\"user-hover-details\"><div class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</div><div class=\"HUserDetails\">\n      <img src=\"" + details.ProfilePic + "\" class=\"userimg\"/>\n      <div class=\"user-name\">" + details.Name + "</div>\n      <div class=\"user-JTitle\">" + details.Title + "</div>\n      <div class=\"user-location\">" + details.Location + "</div>\n      <div class=\"user-avail-title\">Availability</div>\n      <div class=\"user-percent\">" + details.Availability + "%</div>\n      </div></div></td><td>" + details.FirstName + "</td><td>" + details.LastName + "</td><td>" + ViewPhoneNumber.join(",") + "</td><td>" + (details.Location == "" || details.Location == null
                                ? "Not Available"
                                : "" + details.Location) + "</td><td>" + (details.JobTitle == "" || details.JobTitle == null
                                ? "Not Available"
                                : "" + details.JobTitle) + "</td><td>" + details.Title + "</td><td>" + (details.Assistant == "" || details.Assistant == null
                                ? "Not Available"
                                : "" + details.Assistant) + "</td></tr>";
                        }
                        if (details.Affiliation == "Outside Consultant") {
                            OutTable += "<tr><td class=\"user-details-td\"><div class=\"user-hover-details\"><div class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</div><div class=\"HUserDetails\">\n      <img src=\"" + details.ProfilePic + "\" class=\"userimg\"/>\n      <div class=\"user-name\">" + details.Name + "</div>\n      <div class=\"user-JTitle\">" + details.Title + "</div>\n      <div class=\"user-location\">" + details.Location + "</div>\n      <div class=\"user-avail-title\">Availability</div>\n      <div class=\"user-percent\">" + details.Availability + "%</div>\n      </div></div></td><td>" + details.FirstName + "</td><td>" + details.LastName + "</td><td>" + ViewPhoneNumber.join(",") + "</td><td>" + (details.Location == "" || details.Location == null
                                ? "Not Available"
                                : "" + details.Location) + "</td><td>" + (details.JobTitle == "" || details.JobTitle == null
                                ? "Not Available"
                                : "" + details.JobTitle) + "</td><td>" + (details.Title == "" || details.Title == null
                                ? "Not Available"
                                : "" + details.Title) + "</td><td>" + (details.Assistant == "" || details.Assistant == null
                                ? "Not Available"
                                : "" + details.Assistant) + "</td></tr>";
                        }
                        if (details.Affiliation == "Affiliate") {
                            AffTable += "<tr><td class=\"user-details-td\"><div class=\"user-hover-details\"><div class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</div><div class=\"HUserDetails\">\n      <img src=\"" + details.ProfilePic + "\" class=\"userimg\"/>\n      <div class=\"user-name\">" + details.Name + "</div>\n      <div class=\"user-JTitle\">" + details.Title + "</div>\n      <div class=\"user-location\">" + details.Location + "</div>\n      <div class=\"user-avail-title\">Availability</div>\n      <div class=\"user-percent\">" + details.Availability + "%</div>\n      </div></div></td><td>" + details.FirstName + "</td><td>" + details.LastName + "</td><td>" + ViewPhoneNumber.join(",") + "</td><td>" + (details.Location == "" || details.Location == null
                                ? "Not Available"
                                : "" + details.Location) + "</td><td>" + (details.JobTitle == "" || details.JobTitle == null
                                ? "Not Available"
                                : "" + details.JobTitle) + "</td><td>" + (details.Title == "" || details.Title == null
                                ? "Not Available"
                                : "" + details.Title) + "</td><td>" + (details.Assistant == "" || details.Assistant == null
                                ? "Not Available"
                                : "" + details.Assistant) + "</td></tr>";
                        }
                        if (details.Affiliation == "Alumni") {
                            AlumTable += "<tr><td class=\"user-details-td\"><div class=\"user-hover-details\"><div class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</div><div class=\"HUserDetails\">\n      <img src=\"" + details.ProfilePic + "\" class=\"userimg\"/>\n      <div class=\"user-name\">" + details.Name + "</div>\n      <div class=\"user-JTitle\">" + details.Title + "</div>\n      <div class=\"user-location\">" + details.Location + "</div>\n      </div></div></td><td>" + details.FirstName + "</td><td>" + details.LastName + "</td><td>" + ViewPhoneNumber.join(",") + "</td><td>" + (details.Location == "" || details.Location == null
                                ? "Not Available"
                                : "" + details.Location) + "</td><td>" + (details.JobTitle == "" || details.JobTitle == null
                                ? "Not Available"
                                : "" + details.JobTitle) + "</td><td>" + (details.Title == "" || details.Title == null
                                ? "Not Available"
                                : "" + details.Title) + "</td><td>" + (details.Assistant == "" || details.Assistant == null
                                ? "Not Available"
                                : "" + details.Assistant) + "</td></tr>";
                        }
                        AllDetailsTable += "<tr><td class=\"user-details-td\"><div class=\"user-hover-details\"><div class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</div><div class=\"HUserDetails\">\n    <img src=\"" + details.ProfilePic + "\" class=\"userimg\"/>\n    <div class=\"user-name\">" + details.Name + "</div>\n    <div class=\"user-JTitle\">" + details.Title + "</div>\n    <div class=\"user-location\">" + details.Location + "</div>\n    <div class=\"user-avail-title\" style= " + (details.Affiliation != "Alumni" ? "display:block" : "display:none") + ">Availability</div>\n    <div class=\"user-percent\" style= " + (details.Affiliation != "Alumni" ? "display:flex" : "display:none") + ">" + details.Availability + "%</div>\n    </div></div></td><td>" + details.FirstName + "</td><td>" + details.LastName + "</td><td>" + ViewPhoneNumber.join(",") + "</td><td>" + (details.Location == "" || details.Location == null
                            ? "Not Available"
                            : "" + details.Location) + "</td><td>" + (details.JobTitle == "" || details.JobTitle == null
                            ? "Not Available"
                            : "" + details.JobTitle) + "</td><td>" + (details.Title == "" || details.Title == null
                            ? "Not Available"
                            : "" + details.Title) + "</td><td>" + (details.Assistant == "" || details.Assistant == null
                            ? "Not Available"
                            : "" + details.Assistant) + "</td></tr>";
                        if (details.Assistant != "Not Available") {
                            drpArray.push(details.Assistant);
                        }
                        BillingRateTable += "<tr><td class=\"usernametag\" id=" + details.Usermail + "><img src=\"" + details.ProfilePic + "\" width=\"30\" height=\"30\" />" + details.Name + "</td><td>" + details.Title + "</td><td><div>" + (details.USDDaily == "" || details.USDDaily == null
                            ? ""
                            : "USD: " + details.USDDaily) + "</div><div>" + (details.EURDaily == "" || details.EURDaily == null
                            ? ""
                            : "EUR: " + details.EURDaily) + "</div><div>" + (details.OtherCurrDaily == "" || details.OtherCurrDaily == null
                            ? ""
                            : details.OtherCurr + ": " + details.OtherCurrDaily) + "</div></td><td><div>" + (details.USDHourly == "" || details.USDHourly == null
                            ? ""
                            : "USD: " + details.USDHourly) + "</div><div>" + (details.EURHourly == "" || details.EURHourly == null
                            ? ""
                            : "EUR: " + details.EURHourly) + "</div><div>" + (details.OtherCurrHourly == "" || details.OtherCurrHourly == null
                            ? ""
                            : details.OtherCurr + ": " + details.OtherCurrHourly) + "</div></td><td>" + (details.EffectiveDate == "Not Available" ? "Not Available" : new Date(details.EffectiveDate).toLocaleDateString()) + "</td></tr>";
                    });
                    drpAss = drpArray.filter(function (value, index, array) {
                        return array.indexOf(value) == index;
                    });
                    for (i = 0; i < drpAss.length; i++) {
                        AssDDHtml += "<option value='" + drpAss[i] + "'>" + drpAss[i] + "</option>";
                    }
                    $("#drpAssistantforEmployee,#drpAssistantforOutside,#drpAssistantforOutside,#drpAssistantforAffiliates,#drpAssistantforAlumni,#drpAssistantforAllPeople").html(AssDDHtml);
                    $("#SdhEmpTbody").html(EmpTable);
                    $("#SdhOutsideTbody").html(OutTable);
                    $("#SdhAffilateTbody").html(AffTable);
                    $("#SdhAllumniTbody").html(AlumTable);
                    $("#SdhAllPeopleTbody").html(AllDetailsTable);
                    $("#SdgofficeinfoTbody").html(OfficeTable);
                    $("#SdgBillingrateTbody").html(BillingRateTable);
                    options = {
                        order: [[0, "asc"]],
                        lengthMenu: [50, 100],
                    };
                    bindEmpTable(options);
                    bindOutTable(options);
                    bindAffTable(options);
                    bindAlumTable(options);
                    bindAllDetailTable(options);
                    bindOfficeTable(options);
                    bindBillingRateTable(options);
                    SdhEmpTableRowGrouping(1, "StaffAvailabilityTable", bindStaffAvailTable);
                    UserProfileDetail();
                    return [2 /*return*/];
            }
        });
    });
}
var bindEmpTable = function (options) {
    var EMPTable = $("#SdhEmpTable").DataTable(options);
    $("#drpLocationforEmployee").change(function () {
        if ($("#drpLocationforEmployee").val() == "Select") {
            EMPTable.column(4).search("").draw();
        }
        else {
            EMPTable.column(4).search($("#drpLocationforEmployee option:selected").val()).draw();
        }
    });
    $("#drpTitleforEmployee").change(function () {
        if ($("#drpTitleforEmployee").val() == "Select") {
            EMPTable.column(6).search("").draw();
        }
        else {
            EMPTable.column(6).search($("#drpTitleforEmployee option:selected").val()).draw();
        }
    });
    $("#drpAssistantforEmployee").change(function () {
        if ($("#drpAssistantforEmployee").val() == "Select") {
            EMPTable.column(7).search("").draw();
        }
        else {
            EMPTable.column(7).search($("#drpAssistantforEmployee option:selected").val()).draw();
        }
    });
};
var bindOutTable = function (options) {
    var OutTable = $("#SdhOutsideTable").DataTable(options);
    $("#drpLocationforOutside").change(function () {
        if ($("#drpLocationforOutside").val() == "Select") {
            OutTable.column(4).search("").draw();
        }
        else {
            OutTable.column(4).search($("#drpLocationforOutside option:selected").val()).draw();
        }
    });
    $("#drpTitleforOutside").change(function () {
        if ($("#drpTitleforOutside").val() == "Select") {
            OutTable.column(6).search("").draw();
        }
        else {
            OutTable.column(6).search($("#drpTitleforOutside option:selected").val()).draw();
        }
    });
    $("#drpAssistantforOutside").change(function () {
        if ($("#drpAssistantforOutside").val() == "Select") {
            OutTable.column(7).search("").draw();
        }
        else {
            OutTable.column(7).search($("#drpAssistantforOutside option:selected").val()).draw();
        }
    });
};
var bindAffTable = function (options) {
    var AffTable = $("#SdhAffilateTable").DataTable(options);
    $("#drpLocationforAffiliates").change(function () {
        if ($("#drpLocationforAffiliates").val() == "Select") {
            AffTable.column(4).search("").draw();
        }
        else {
            AffTable.column(4).search($("#drpLocationforAffiliates option:selected").val()).draw();
        }
    });
    $("#drpTitleforAffiliates").change(function () {
        if ($("#drpTitleforAffiliates").val() == "Select") {
            AffTable.column(6).search("").draw();
        }
        else {
            AffTable.column(6).search($("#drpTitleforAffiliates option:selected").val()).draw();
        }
    });
    $("#drpAssistantforAffiliates").change(function () {
        if ($("#drpAssistantforAffiliates").val() == "Select") {
            AffTable.column(7).search("").draw();
        }
        else {
            AffTable.column(7).search($("#drpAssistantforAffiliates option:selected").val()).draw();
        }
    });
};
var bindAlumTable = function (options) {
    var AlumTable = $("#SdhAllumniTable").DataTable(options);
    $("#drpLocationforAlumni").change(function () {
        if ($("#drpLocationforAlumni").val() == "Select") {
            AlumTable.column(4).search("").draw();
        }
        else {
            AlumTable.column(4).search($("#drpLocationforAlumni option:selected").val()).draw();
        }
    });
    $("#drpTitleforAlumni").change(function () {
        if ($("#drpTitleforAlumni").val() == "Select") {
            AlumTable.column(6).search("").draw();
        }
        else {
            AlumTable.column(6).search($("#drpTitleforAlumni option:selected").val()).draw();
        }
    });
    $("#drpAssistantforAlumni").change(function () {
        if ($("#drpAssistantforAlumni").val() == "Select") {
            AlumTable.column(7).search("").draw();
        }
        else {
            AlumTable.column(7).search($("#drpAssistantforAlumni option:selected").val()).draw();
        }
    });
};
var bindAllDetailTable = function (options) {
    var AllDetailTable = $("#SdhAllPeopleTable").DataTable(options);
    $("#drpLocationforAllPeople").change(function () {
        if ($("#drpLocationforAllPeople").val() == "Select") {
            AllDetailTable.column(4).search("").draw();
        }
        else {
            AllDetailTable.column(4).search($("#drpLocationforAllPeople option:selected").val()).draw();
        }
    });
    $("#drpTitleforAllPeople").change(function () {
        if ($("#drpTitleforAllPeople").val() == "Select") {
            AllDetailTable.column(6).search("").draw();
        }
        else {
            AllDetailTable.column(6).search($("#drpTitleforAllPeople option:selected").val()).draw();
        }
    });
    $("#drpAssistantforAllPeople").change(function () {
        if ($("#drpAssistantforAllPeople").val() == "Select") {
            AllDetailTable.column(7).search("").draw();
        }
        else {
            AllDetailTable.column(7).search($("#drpAssistantforAllPeople option:selected").val()).draw();
        }
    });
};
var bindOfficeTable = function (option) {
    $("#SdgofficeinfoTable").DataTable(option);
};
var bindBillingRateTable = function (option) {
    $("#SdgBillingrateTable").DataTable(option);
};
var bindStaffAvailTable = function (option) {
    $('#StaffAvailabilityTable').DataTable(option);
};
//Todo TableRowGrouping
var SdhEmpTableRowGrouping = function (colno, tablename, tablefn) {
    var collapsedGroups = {};
    var options = {
        order: [[colno, "asc"]],
        lengthMenu: [50, 100],
        destroy: true,
        rowGroup: {
            dataSrc: colno,
            startRender: function (rows, group) {
                var collapsed = !!collapsedGroups[group];
                rows.nodes().each(function (r) {
                    r.style.display = collapsed ? "none" : "";
                });
                return $("<tr/>")
                    .append('<td colspan="8">' + group + " (" + rows.count() + ")</td>")
                    .attr("data-name", group)
                    .toggleClass("collapsed", collapsed);
            },
        },
    };
    $("#" + tablename + " tbody").on("click", "tr.dtrg-start", function () {
        var name = $(this).data("name");
        collapsedGroups[name] = !collapsedGroups[name];
    });
    tablefn(options);
};
function startIt() {
    var schema = {};
    schema["PrincipalAccountType"] = "User,DL,SecGroup,SPGroup";
    schema["SearchPrincipalSource"] = 15;
    schema["ResolvePrincipalSource"] = 15;
    schema["AllowMultipleValues"] = false;
    schema["MaximumEntitySuggestions"] = 50;
    schema["Width"] = "280px";
    SPClientPeoplePicker_InitStandaloneControlWrapper("peoplepickerText", null, schema);
}
var UserProfileDetail = function () { return __awaiter(_this, void 0, void 0, function () {
    var userpage, username, sdhEmp, Edit, viewBiling;
    var _this = this;
    return __generator(this, function (_a) {
        ItemID = 0;
        OfficeAddArr = [];
        SelectedUser = "";
        SelectedUserProfile = [];
        OfficeDetails.forEach(function (off) {
            OfficeAddArr.push({ OfficePlace: off.Office, OfficeFullAdd: off.Address });
        });
        userpage = document.querySelector(".user-profile-page");
        username = document.querySelectorAll(".usernametag");
        sdhEmp = document.querySelector(".sdh-employee");
        Edit = document.querySelector("#btnEdit");
        viewBiling = document.querySelector(".view-directory .user-billing-rates");
        username.forEach(function (btn) {
            btn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                var pemailarr, pemailHTML, htmlforPhoneNumber, phnoval, htmlforHomeNo, Homenoval, htmlforEmergencyNo, Emnoval, htmlforOfficeNo, Ofnoval, billingRateHtml, filesHtml, editfileHtml, files, editfMonth, editfday, Sdd, Smm, Syyyy, Sdateformat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!sdhEmp.classList.contains("hide")) {
                                sdhEmp.classList.add("hide");
                                userpage.classList.remove("hide");
                            }
                            SelectedUser = e.currentTarget["id"];
                            SelectedUserProfile = UserDetails.filter(function (li) {
                                return li.Usermail == SelectedUser;
                            });
                            selectedUsermail = SelectedUserProfile[0].Usermail;
                            $(".profile-picture").attr("src", SelectedUserProfile[0].ProfilePic);
                            if ((SelectedUserProfile[0].Usermail.toLowerCase() == currentMail.toLowerCase() && IsgeneralStaff) || IsAdminStaff) {
                                Edit.classList.remove('hide');
                                viewBiling.classList.remove('hide');
                            }
                            else if (IssplStaff) {
                                Edit.classList.add('hide');
                                viewBiling.classList.remove('hide');
                            }
                            else {
                                Edit.classList.add('hide');
                                viewBiling.classList.add('hide');
                            }
                            useravailabilityDetails();
                            $('#linkedinIDview').html("<a href=\"" + SelectedUserProfile[0].LinkedInID.Url + "\" target ='_blank' data-interception=\"off\"><span class=\"icon-linkedin\"></span></a>");
                            $("#user-Designation").html(SelectedUserProfile[0].Affiliation);
                            $("#user-staff-function").html(SelectedUserProfile[0].Title);
                            $("#user-location").html(SelectedUserProfile[0].Location);
                            $("#UserProfileName").html(SelectedUserProfile[0].Name);
                            $("#UserProfileEmail").html("<span class=\"user-mail-icon\"></span>" + SelectedUserProfile[0].Usermail);
                            if (SelectedUserProfile[0].LinkedInID) {
                                $("#UserLinkedID").html("<a href=\"" + SelectedUserProfile[0].LinkedInID.Url + "\" target ='_blank' data-interception=\"off\"><span class=\"user-linkedin-icon\"></span><p>LinkedIn</p></a>");
                                $("#UserLinkedID").show();
                            }
                            else {
                                $("#UserLinkedID").hide();
                            }
                            //WorkAddress-view-ShowHide
                            if (SelectedUserProfile[0].Location) {
                                $("#WLoctionDetails").html(SelectedUserProfile[0].Location);
                                $("#WAddressDetails").html(OfficeAddArr.filter(function (add) { return SelectedUserProfile[0].Location == add.OfficePlace; })[0].OfficeFullAdd);
                                $('.work-address-view').show();
                            }
                            else {
                                $('.work-address-view').hide();
                                $("#WLoctionDetails").html();
                                $("#WAddressDetails").html();
                            }
                            //personalMail-view-ShowHide
                            if (SelectedUserProfile[0].UserPersonalMail) {
                                pemailarr = SelectedUserProfile[0].UserPersonalMail.split(';');
                                pemailHTML = "";
                                pemailarr.map(function (email) {
                                    email ? pemailHTML += "<a href=\"mailto:" + email + "\">" + email + "</a>;" : "";
                                });
                                $('#userpersonalmail').parent().removeClass('hide');
                                $('#userpersonalmail').html(pemailHTML);
                            }
                            else {
                                $('#userpersonalmail').html("");
                                $('#userpersonalmail').parent().addClass('hide');
                            }
                            //Assistant-view-ShowHide
                            if (SelectedUserProfile[0].Assistant) {
                                $("#viewAssistant").html("<h4>Assisstant</h4><div class=\"d-flex align-item-center\">\n                <label>Assistant : </label><div class=\"lblRight\" id=\"assistantViewpage\">" + SelectedUserProfile[0].Assistant + "</div>\n                </div>");
                            }
                            else {
                                $("#viewAssistant").html("");
                            }
                            //MobileNo-view-ShowHide
                            if (SelectedUserProfile[0].PhoneNumber) {
                                $("#user-phone").show();
                                $("#user-phone-l").show();
                                htmlforPhoneNumber = "";
                                phnoval = SelectedUserProfile[0].PhoneNumber.split("^");
                                if (phnoval.length > 0) {
                                    phnoval.map(function (ph) { ph ? htmlforPhoneNumber += ph + ";" : ""; });
                                    $("#user-phone").html(htmlforPhoneNumber);
                                }
                                else {
                                    $("#user-phone").hide();
                                    $("#user-phone-l").hide();
                                }
                            }
                            else {
                                $("#user-phone").hide();
                                $("#user-phone-l").hide();
                            }
                            if (!SelectedUserProfile[0].OfficeNo && !SelectedUserProfile[0].EmergencyNo && !SelectedUserProfile[0].HomeNo) {
                                $('.contact-info-view').hide();
                            }
                            else {
                                //HomeNo-view-ShowHide
                                $('.contact-info-view').show();
                                if (SelectedUserProfile[0].SignOther) {
                                    $('#PSignOther').parent().removeClass('hide');
                                    $('#PSignOther').html(SelectedUserProfile[0].SignOther);
                                }
                                else {
                                    $('#PSignOther').html("");
                                    $('#PSignOther').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].Child) {
                                    $('#PChildren').parent().removeClass('hide');
                                    $('#PChildren').html(SelectedUserProfile[0].Child);
                                }
                                else {
                                    $('#PChildren').html("");
                                    $('#PChildren').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].HomeNo) {
                                    $("#homeNoview").show();
                                    $("#homeNoviewl").show();
                                    htmlforHomeNo = "";
                                    Homenoval = SelectedUserProfile[0].HomeNo.split("^");
                                    if (Homenoval.length > 0) {
                                        Homenoval.map(function (ho) { ho ? htmlforHomeNo += ho + ";" : ""; });
                                        $("#homeNoview").html(htmlforHomeNo);
                                    }
                                    else {
                                        $("#homeNoview").hide();
                                        $("#homeNoviewl").hide();
                                    }
                                }
                                else {
                                    $("#homeNoview").hide();
                                    $("#homeNoviewl").hide();
                                }
                                //EmgNo-view-ShowHide
                                if (SelectedUserProfile[0].EmergencyNo) {
                                    $("#emergencyNoview").show();
                                    $("#emergencyNoviewl").show();
                                    htmlforEmergencyNo = "";
                                    Emnoval = SelectedUserProfile[0].EmergencyNo.split("^");
                                    if (Emnoval.length > 0) {
                                        Emnoval.map(function (EO) { EO ? htmlforEmergencyNo += EO + ";" : ""; });
                                        $("#emergencyNoview").html(htmlforHomeNo);
                                    }
                                    else {
                                        $("#emergencyNoview").hide();
                                        $("#emergencyNoviewl").hide();
                                    }
                                }
                                else {
                                    $("#emergencyNoview").hide();
                                    $("#emergencyNoviewl").hide();
                                }
                                //OfficeNo-view-ShowHide
                                if (SelectedUserProfile[0].OfficeNo) {
                                    $("#officeNoview").show();
                                    $("#officeNoviewl").show();
                                    htmlforOfficeNo = "";
                                    Ofnoval = SelectedUserProfile[0].OfficeNo.split("^");
                                    if (Ofnoval.length > 0) {
                                        Ofnoval.map(function (OO) { OO ? htmlforOfficeNo += OO + ";" : ""; });
                                        $("#officeNoview").html(htmlforOfficeNo);
                                    }
                                    else {
                                        $("#officeNoview").hide();
                                        $("#officeNoviewl").hide();
                                    }
                                }
                                else {
                                    $("#officeNoview").hide();
                                    $("#officeNoviewl").hide();
                                }
                            }
                            if (!SelectedUserProfile[0].HAddLine && !SelectedUserProfile[0].HAddCity && !SelectedUserProfile[0].HAddState && !SelectedUserProfile[0].HAddPCode && !SelectedUserProfile[0].HAddPCountry && !SelectedUserProfile[0].SignOther && !SelectedUserProfile[0].Child) {
                                $('.personal-info-view').hide();
                            }
                            else {
                                $('.personal-info-view').show();
                                if (SelectedUserProfile[0].HAddLine) {
                                    $('#PAddLine').parent().removeClass('hide');
                                    $('#PAddLine').html(SelectedUserProfile[0].HAddLine);
                                }
                                else {
                                    $('#PAddLine').html("");
                                    $('#PAddLine').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].HAddCity) {
                                    $('#PAddCity').parent().removeClass('hide');
                                    $('#PAddCity').html(SelectedUserProfile[0].HAddCity);
                                }
                                else {
                                    $('#PAddCity').html("");
                                    $('#PAddCity').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].HAddState) {
                                    $('#PAddState').parent().removeClass('hide');
                                    $('#PAddState').html(SelectedUserProfile[0].HAddState);
                                }
                                else {
                                    $('#PAddState').html("");
                                    $('#PAddState').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].HAddPCode) {
                                    $('#PAddPCode').parent().removeClass('hide');
                                    $('#PAddPCode').html(SelectedUserProfile[0].HAddPCode);
                                }
                                else {
                                    $('#PAddPCode').html("");
                                    $('#PAddPCode').parent().addClass('hide');
                                }
                                if (SelectedUserProfile[0].HAddPCountry) {
                                    $('#PAddPCountry').parent().removeClass('hide');
                                    $('#PAddPCountry').html(SelectedUserProfile[0].HAddPCountry);
                                }
                                else {
                                    $('#PAddPCountry').html("");
                                    $('#PAddPCountry').parent().addClass('hide');
                                }
                            }
                            //StaffStatus-view-ShowHide
                            if (SelectedUserProfile[0].StaffStatus) {
                                $("#staffStatus").html(SelectedUserProfile[0].StaffStatus);
                                $("#workscheduleViewSec").html(SelectedUserProfile[0].StaffStatus == "Part-time" ? "<div class=\"d-flex\"><label>Work Schedule</label><p class=\"lblRight\" id=\"workSchedule\">" + (SelectedUserProfile[0].WorkSchedule ? SelectedUserProfile[0].WorkSchedule : "") + "</p></div>" : "");
                                $('.StaffStatus-view').show();
                            }
                            else {
                                $('.StaffStatus-view').hide();
                            }
                            //Citizen-view-ShowHide
                            if (SelectedUserProfile[0].Citizen) {
                                $('#citizenship').parent().removeClass('hide');
                                $('#citizenship').html(SelectedUserProfile[0].Citizen);
                            }
                            else {
                                $('#citizenship').html("");
                                $('#citizenship').parent().addClass('hide');
                            }
                            billingRateHtml = "";
                            if (!SelectedUserProfile[0].USDDaily && !SelectedUserProfile[0].EURDaily && !SelectedUserProfile[0].OtherCurrDaily) {
                                viewBiling.classList.add('hide');
                            }
                            else {
                                viewBiling.classList.remove('hide');
                                if (SelectedUserProfile[0].USDDaily != null && SelectedUserProfile[0].USDDaily != 0 && SelectedUserProfile[0].USDDaily != "0") {
                                    billingRateHtml += "<div class=\"billing-rates\"><label>USD Daily Rate</label><div class=\"usd-daily-rate lblBlue\" id=\"UsdDailyRate\">" + SelectedUserProfile[0].USDDaily + "</div></div><div class=\"billing-rates\"><label>USD Hourly Rate</label><div class=\"usd-hourly-rate lblBlue\" id=\"UsdHourlyRate\">" + SelectedUserProfile[0].USDHourly + "</div></div>";
                                }
                                if (SelectedUserProfile[0].EURDaily != null && SelectedUserProfile[0].EURDaily != 0 && SelectedUserProfile[0].EURDaily != "0") {
                                    billingRateHtml += "<div class=\"billing-rates\"><label>EUR Daily Rate</label><div class=\"eur-daily-rate lblBlue\" id=\"EURDailyRate\">" + SelectedUserProfile[0].EURDaily + "</div></div><div class=\"billing-rates\"><label>EUR Hourly Rate</label><div class=\"eur-hourly-rate lblBlue\" id=\"EURHourlyRate\">" + SelectedUserProfile[0].EURHourly + "</div></div>";
                                }
                                if (SelectedUserProfile[0].OtherCurrDaily != null && SelectedUserProfile[0].OtherCurrDaily != 0 && SelectedUserProfile[0].OtherCurrDaily != "0") {
                                    billingRateHtml += "<div class=\"billing-rates\"><label>" + SelectedUserProfile[0].OtherCurr + " Daily Rate</label><div class=\"eur-daily-rate lblBlue\" id=\"oDailyRate\">" + SelectedUserProfile[0].OtherCurrDaily + "</div></div><div class=\"billing-rates\"><label>" + SelectedUserProfile[0].OtherCurr + " Hourly Rate</label><div class=\"eur-hourly-rate lblBlue\" id=\"oHourlyRate\">" + SelectedUserProfile[0].OtherCurrHourly + "</div></div>";
                                }
                                if (SelectedUserProfile[0].EffectiveDate != null) {
                                    billingRateHtml += " <div class=\"billing-effective-date\"><label>Effective Date</label><div class=\"effective-date lblBlue\" id=\"EffectiveDate\">" + new Date(SelectedUserProfile[0].EffectiveDate).toLocaleDateString() + "</div></div>";
                                }
                                if (SelectedUserProfile[0].BillingRateComments != null) {
                                    billingRateHtml += " <div class=\"billing-rates\"><label>Comments</label><div class=\"Billing-comments\" id=\"BillingRateComments\">" + SelectedUserProfile[0].BillingRateComments + "</div></div>";
                                }
                                $("#BillingRateDetails").html(billingRateHtml);
                            }
                            //ShortBio-view-ShowHide
                            if (SelectedUserProfile[0].ShortBio) {
                                $('#shortbioh').show();
                                $('#shortbio').html(SelectedUserProfile[0].ShortBio);
                            }
                            else {
                                $('#shortbio').hide();
                                $('#shortbioh').hide();
                            }
                            filesHtml = "";
                            editfileHtml = "";
                            return [4 /*yield*/, sp.web.getFolderByServerRelativeUrl("BiographyDocument/" + SelectedUserProfile[0].Usermail).files.get()];
                        case 1:
                            files = _a.sent();
                            if (files.length > 0) {
                                files.forEach(function (file) {
                                    if (file.Name.split(".").pop() == "doc" || file.Name.split(".").pop() == "docx") {
                                        filesHtml += "<div class=\"doc-section\"><span class=\"word-doc\"></span><a href='" + file.ServerRelativeUrl + "' target=\"_blank\">" + file.Name + "</a></div>";
                                        editfileHtml += "<div class=\"quantityFiles\"><span class=\"upload-filename\">" + file.Name + "</span><a filename=\"" + file.Name + "\" class=\"clsfileremove\">x</a></div>";
                                    }
                                    else if (file.Name.split(".").pop() == "xlsx" || file.Name.split(".").pop() == "csv") {
                                        filesHtml += "<div class=\"doc-section\"><span class=\"excel-doc\"></span><a href='" + file.ServerRelativeUrl + "' target=\"_blank\">" + file.Name + "</a></div>";
                                        editfileHtml += "<div class=\"quantityFiles\"><span class=\"upload-filename\">" + file.Name + "</span><a  filename=\"" + file.Name + "\" class=\"clsfileremove\">x</a></div>";
                                    }
                                    else if (file.Name.split(".").pop() == "png" || file.Name.split(".").pop() == "jpg" || file.Name.split(".").pop() == "jpeg") {
                                        filesHtml += "<div class=\"doc-section\"><span class=\"pic-doc\"></span><a href='" + file.ServerRelativeUrl + "' target=\"_blank\">" + file.Name + "</a></div>";
                                        editfileHtml += "<div class=\"quantityFiles\"><span class=\"upload-filename\">" + file.Name + "</span><a  filename=\"" + file.Name + "\" class=\"clsfileremove\">x</a></div>";
                                    }
                                    else {
                                        filesHtml += "<div class=\"doc-section\"><span class=\"new-doc\"></span><a href='" + file.ServerRelativeUrl + "' target=\"_blank\">" + file.Name + "</a></div>";
                                        editfileHtml += "<div class=\"quantityFiles\"><span class=\"upload-filename\">" + file.Name + "</span><a  filename=\"" + file.Name + "\" class=\"clsfileremove\">x</a></div>";
                                    }
                                    $("#bioAttachment").html(filesHtml);
                                    $("#filesfromfolder").html(editfileHtml);
                                    $('#bioAttachhead').show();
                                });
                            }
                            else {
                                $('#bioAttachhead').hide();
                                $("#bioAttachment").html("");
                                $("#filesfromfolder").html("");
                            }
                            ItemID = SelectedUserProfile[0].ItemID;
                            //Experience-view-ShowHide
                            if (!SelectedUserProfile[0].SpecialKnowledge && !SelectedUserProfile[0].Membership && !SelectedUserProfile[0].Software && !SelectedUserProfile[0].SDGCourse && !SelectedUserProfile[0].Language && !SelectedUserProfile[0].Industry) {
                                $('.other-exp-view').hide();
                            }
                            else {
                                $('.other-exp-view').show();
                                if (SelectedUserProfile[0].Industry) {
                                    $('#IndustryExpl').show();
                                    $('#IndustryExp').html(SelectedUserProfile[0].Industry);
                                }
                                else {
                                    $('#IndustryExp').hide();
                                    $('#IndustryExpl').hide();
                                }
                                if (SelectedUserProfile[0].Language) {
                                    $('#LanguageExpl').show();
                                    $('#LanguageExp').html(SelectedUserProfile[0].Language);
                                }
                                else {
                                    $('#LanguageExp').hide();
                                    $('#LanguageExpl').hide();
                                }
                                if (SelectedUserProfile[0].SDGCourse) {
                                    $('#SDGCoursel').show();
                                    $('#SDGCourse').html(SelectedUserProfile[0].SDGCourse);
                                }
                                else {
                                    $('#SDGCourse').hide();
                                    $('#SDGCoursel').hide();
                                }
                                if (SelectedUserProfile[0].Software) {
                                    $('#SoftwareExpl').show();
                                    $('#SoftwareExp').html(SelectedUserProfile[0].Software);
                                }
                                else {
                                    $('#SoftwareExp').hide();
                                    $('#SoftwareExpl').hide();
                                }
                                if (SelectedUserProfile[0].Membership) {
                                    $('#MembershipExpl').show();
                                    $('#MembershipExp').html(SelectedUserProfile[0].Membership);
                                }
                                else {
                                    $('#MembershipExp').hide();
                                    $('#MembershipExpl').hide();
                                }
                                if (SelectedUserProfile[0].SpecialKnowledge) {
                                    $('#SpecialKnowledgel').show();
                                    $('#SpecialKnowledge').html(SelectedUserProfile[0].SpecialKnowledge);
                                }
                                else {
                                    $('#SpecialKnowledge').hide();
                                    $('#SpecialKnowledgel').hide();
                                }
                            }
                            if ($('#shortbioh').css('display') == 'none' && $('#bioAttachhead').css('display') == 'none' && $('.other-exp-view').css('display') == 'none') {
                                $('.Biography-Experience-view').hide();
                            }
                            else {
                                $('.Biography-Experience-view').show();
                            }
                            editfMonth = "";
                            editfday = "";
                            Sdd = new Date(SelectedUserProfile[0].EffectiveDate).getDate();
                            Sdd < 10 ? (editfday = "0" + Sdd) : (editfday = Sdd);
                            Smm = new Date(SelectedUserProfile[0].EffectiveDate).getMonth() + 1;
                            Smm < 10 ? (editfMonth = "0" + Smm) : (editfMonth = Smm);
                            Syyyy = new Date(SelectedUserProfile[0].EffectiveDate).getFullYear();
                            Sdateformat = Syyyy + "-" + editfMonth + "-" + editfday;
                            $("#EffectiveDateEdit").val(Sdateformat);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        $("#USDDailyEdit").keyup(function () {
            var usdvalue = $("#USDDailyEdit").val();
            var finalusdval = usdvalue / 8;
            $("#USDHourlyEdit").val(finalusdval);
        });
        $("#EURDailyEdit").keyup(function () {
            var eurdaily = $("#EURDailyEdit").val();
            var finaleurval = eurdaily / 8;
            $("#EURHourlyEdit").val(finaleurval);
        });
        $("#ODailyEdit").keyup(function () {
            var ovalue = $("#ODailyEdit").val();
            var finalovalue = ovalue / 8;
            $("#OHourlyEdit").val(finalovalue);
        });
        $(document).on("click", ".clsfileremove", function () {
            var filename = $(this).attr("filename");
            $(this).parent().remove();
            sp.web.getFileByServerRelativeUrl("/sites/StaffDirectory/BiographyDocument/" + SelectedUserProfile[0].Usermail + "/" + filename).recycle().then(function (data) { });
        });
        return [2 /*return*/];
    });
}); };
var editFunction = function () { return __awaiter(_this, void 0, void 0, function () {
    var Edit, UserView, UserEdit, adminviewBilling, userviewBilling, viewBiling, billingRateHtml, MobileNumberHtmlSec, HomeNumberHtmlSec, EmergencyNumberHtmlSec, OfficeNumberHtmlSec, MCCodeArr, AllMnumber, AllMobileNumbers, HCCodeArr, AllHNumber, AllHomeNumber, ECCodeArr, AllENumber, AllEmergencyNumber, OCCodeArr, AllONumber, AllOfficeNumber, emailAddress, divID;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/init.js").then(function () { })];
            case 1:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/1033/sts_strings.js")];
            case 2:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/clientforms.js")];
            case 3:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/clienttemplates.js")];
            case 4:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/clientpeoplepicker.js")];
            case 5:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/autofill.js")];
            case 6:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/SP.js")];
            case 7:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/sp.runtime.js")];
            case 8:
                _a.sent();
                return [4 /*yield*/, SPComponentLoader.loadScript("/_layouts/15/sp.core.js")];
            case 9:
                _a.sent();
                return [4 /*yield*/, startIt()];
            case 10:
                _a.sent();
                Edit = document.querySelector("#btnEdit");
                UserView = document.querySelector(".view-directory");
                UserEdit = document.querySelector(".edit-directory");
                adminviewBilling = document.querySelector("#BillingRateDetailsEdit");
                userviewBilling = document.querySelector("#BillingRateDetailsView");
                viewBiling = document.querySelector(".edit-directory .user-billing-rates");
                if (!UserView.classList.contains("hide")) {
                    UserView.classList.add("hide");
                    UserEdit.classList.remove("hide");
                    Edit.classList.add("hide");
                    if (IsAdminStaff) {
                        viewBiling.classList.remove('hide');
                        adminviewBilling.classList.remove('hide');
                        userviewBilling.classList.add('hide');
                    }
                    else {
                        viewBiling.classList.add('hide');
                        adminviewBilling.classList.add('hide');
                        userviewBilling.classList.remove('hide');
                        billingRateHtml = "";
                        if (SelectedUserProfile[0].USDDaily != null && SelectedUserProfile[0].USDDaily != 0 && SelectedUserProfile[0].USDDaily != "0") {
                            billingRateHtml += "<div class=\"billing-rates\"><label>USD Daily Rate</label><div class=\"usd-daily-rate lblBlue\" id=\"UsdDailyRate\">" + SelectedUserProfile[0].USDDaily + "</div></div><div class=\"billing-rates\"><label>USD Hourly Rate</label><div class=\"usd-hourly-rate lblBlue\" id=\"UsdHourlyRate\">" + SelectedUserProfile[0].USDHourly + "</div></div>";
                        }
                        if (SelectedUserProfile[0].EURDaily != null &&
                            SelectedUserProfile[0].EURDaily != 0 &&
                            SelectedUserProfile[0].EURDaily != "0") {
                            billingRateHtml += "<div class=\"billing-rates\"><label>EUR Daily Rate</label><div class=\"eur-daily-rate lblBlue\" id=\"EURDailyRate\">" + SelectedUserProfile[0].EURDaily + "</div></div><div class=\"billing-rates\"><label>EUR Hourly Rate</label><div class=\"eur-hourly-rate lblBlue\" id=\"EURHourlyRate\">" + SelectedUserProfile[0].EURHourly + "</div></div>";
                        }
                        if (SelectedUserProfile[0].OtherCurrDaily != null &&
                            SelectedUserProfile[0].OtherCurrDaily != 0 &&
                            SelectedUserProfile[0].OtherCurrDaily != "0") {
                            billingRateHtml += "<div class=\"billing-rates\"><label>" + SelectedUserProfile[0].OtherCurr + " Daily Rate</label><div class=\"eur-daily-rate lblBlue\" id=\"oDailyRate\">" + SelectedUserProfile[0].OtherCurrDaily + "</div></div><div class=\"billing-rates\"><label>" + SelectedUserProfile[0].OtherCurr + " Hourly Rate</label><div class=\"eur-hourly-rate lblBlue\" id=\"oHourlyRate\">" + SelectedUserProfile[0].OtherCurrHourly + "</div></div>";
                        }
                        if (SelectedUserProfile[0].EffectiveDate != null) {
                            billingRateHtml += " <div class=\"billing-effective-date\"><label>Effective Date</label><div class=\"effective-date lblBlue\" id=\"EffectiveDate\">" + new Date(SelectedUserProfile[0].EffectiveDate).toLocaleDateString() + "</div></div>";
                        }
                        if (SelectedUserProfile[0].BillingRateComments != null) {
                            billingRateHtml += " <div class=\"billing-rates\"><label>Comments</label><div class=\"Billing-comments\" id=\"BillingRateComments\">" + SelectedUserProfile[0].BillingRateComments + "</div></div>";
                        }
                        $('#BillingRateDetailsView').html("");
                        $('#BillingRateDetailsView').html(billingRateHtml);
                    }
                }
                else {
                    UserEdit.classList.remove("hide");
                    Edit.classList.add("hide");
                }
                MobileNumberHtmlSec = "";
                HomeNumberHtmlSec = "";
                EmergencyNumberHtmlSec = "";
                OfficeNumberHtmlSec = "";
                MCCodeArr = [];
                if (SelectedUserProfile[0].PhoneNumber != "" && SelectedUserProfile[0].PhoneNumber != null) {
                    AllMnumber = SelectedUserProfile[0].PhoneNumber.split("^");
                    AllMnumber.pop();
                    AllMobileNumbers = AllMnumber;
                    AllMobileNumbers.forEach(function (numbers, i) {
                        var SplitedMNum = numbers.split(" - ");
                        MCCodeArr.push(SplitedMNum[0]);
                        if (i == 0) {
                            MobileNumberHtmlSec += "<div class=\"d-flex mobNumbers\"><select class=\"mobNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"\" value=\"" + SplitedMNum[1] + "\"><span class=\"addMobNo add-icon\"></div>";
                            $("#mobileNoSec").html(MobileNumberHtmlSec);
                        }
                        else {
                            MobileNumberHtmlSec += "<div class=\"d-flex mobNumbers\"><select class=\"mobNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"\" value=\"" + SplitedMNum[1] + "\"><span class=\"removeMobNo remove-icon\"></div>";
                            $("#mobileNoSec").html(MobileNumberHtmlSec);
                        }
                    });
                }
                else {
                    MobileNumberHtmlSec += "<div class=\"d-flex mobNumbers\"><select class=\"mobNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"\"><span class=\"addMobNo add-icon\"></div>";
                    $("#mobileNoSec").html(MobileNumberHtmlSec);
                }
                HCCodeArr = [];
                if (SelectedUserProfile[0].HomeNo != "" && SelectedUserProfile[0].HomeNo != null) {
                    AllHNumber = SelectedUserProfile[0].HomeNo.split("^");
                    AllHNumber.pop();
                    AllHomeNumber = AllHNumber;
                    AllHomeNumber.forEach(function (hnumbs, j) {
                        var SplitedHNum = hnumbs.split(' - ');
                        HCCodeArr.push(SplitedHNum[0]);
                        if (j == 0) {
                            HomeNumberHtmlSec += "<div class=\"d-flex homeNumbers\"><select class=\"homeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedHNum[1] + "\"><span class=\"addHomeNo add-icon\"></div>";
                            $('#homeNoSec').html(HomeNumberHtmlSec);
                        }
                        else {
                            HomeNumberHtmlSec += "<div class=\"d-flex homeNumbers\"><select class=\"homeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedHNum[1] + "\"><span class=\"removeHomeNo remove-icon\"></div>";
                            $('#homeNoSec').html(HomeNumberHtmlSec);
                        }
                    });
                }
                else {
                    HomeNumberHtmlSec += "<div class=\"d-flex homeNumbers\"><select class=\"homeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\"><span class=\"addHomeNo add-icon\"></div>";
                    $('#homeNoSec').html(HomeNumberHtmlSec);
                }
                ECCodeArr = [];
                if (SelectedUserProfile[0].EmergencyNo != "" && SelectedUserProfile[0].EmergencyNo != null) {
                    AllENumber = SelectedUserProfile[0].EmergencyNo.split("^");
                    AllENumber.pop();
                    AllEmergencyNumber = AllENumber;
                    AllEmergencyNumber.forEach(function (enums, k) {
                        var SplitedENum = enums.split(' - ');
                        ECCodeArr.push(SplitedENum[0]);
                        if (k == 0) {
                            EmergencyNumberHtmlSec += "<div class=\"d-flex emergencyNumbers\"><select class=\"emergencyNoCode\" id=\"ec" + k + "\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedENum[1] + "\"><span class=\"addEmergencyNo add-icon\"></div>";
                            $('#emergencyNoSec').html(EmergencyNumberHtmlSec);
                        }
                        else {
                            EmergencyNumberHtmlSec += "<div class=\"d-flex emergencyNumbers\"><select class=\"emergencyNoCode\" id=\"ec" + k + "\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedENum[1] + "\"><span class=\"removeEmergencyNo remove-icon\"></div>";
                            $('#emergencyNoSec').html(EmergencyNumberHtmlSec);
                        }
                    });
                }
                else {
                    EmergencyNumberHtmlSec += "<div class=\"d-flex emergencyNumbers\"><select class=\"emergencyNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\"><span class=\"addEmergencyNo add-icon\"></div>";
                    $('#emergencyNoSec').html(EmergencyNumberHtmlSec);
                }
                OCCodeArr = [];
                if (SelectedUserProfile[0].OfficeNo != "" && SelectedUserProfile[0].OfficeNo != null) {
                    AllONumber = SelectedUserProfile[0].OfficeNo.split("^");
                    AllONumber.pop();
                    AllOfficeNumber = AllONumber;
                    AllOfficeNumber.forEach(function (onums, l) {
                        var SplitedONum = onums.split(' - ');
                        OCCodeArr.push(SplitedONum[0]);
                        if (l == 0) {
                            OfficeNumberHtmlSec += "<div class=\"d-flex officeNumbers\"><select class=\"officeNoCode\" id=\"oc" + l + "\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedONum[1] + "\"><span class=\"addOfficeNo add-icon\"></div>";
                            $('#officeNoSec').html(OfficeNumberHtmlSec);
                        }
                        else {
                            OfficeNumberHtmlSec += "<div class=\"d-flex officeNumbers\"><select class=\"officeNoCode\" id=\"oc" + l + "\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\" value=\"" + SplitedONum[1] + "\"><span class=\"removeOfficeNo remove-icon\"></div>";
                            $('#officeNoSec').html(OfficeNumberHtmlSec);
                        }
                    });
                }
                else {
                    OfficeNumberHtmlSec += "<div class=\"d-flex officeNumbers\"><select class=\"officeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"home\" id=\"\"><span class=\"addOfficeNo add-icon\"></div>";
                    $('#officeNoSec').html(OfficeNumberHtmlSec);
                }
                if (OCCodeArr.length > 0) {
                    $('.officeNoCode').each(function (i, evt) {
                        var ecID = OCCodeArr[i];
                        var idx = CCodeArr.indexOf(ecID);
                        evt["selectedIndex"] = idx;
                        // $(this).value=ecID
                        // $(this).val(ECCodeArr[i])
                        // $("#"+evt.id).val(ECCodeArr[i])
                    });
                }
                if (ECCodeArr.length > 0) {
                    $('.emergencyNoCode').each(function (i, evt) {
                        var ecID = ECCodeArr[i];
                        var idx = CCodeArr.indexOf(ecID);
                        evt["selectedIndex"] = idx;
                        // $(this).value=ecID
                        // $(this).val(ECCodeArr[i])
                        // $("#"+evt.id).val(ECCodeArr[i])
                    });
                }
                if (MCCodeArr.length > 0) {
                    $('.mobNoCode').each(function (i, evt) {
                        var ecID = MCCodeArr[i];
                        var idx = CCodeArr.indexOf(ecID);
                        evt["selectedIndex"] = idx;
                        // $(this).value=ecID
                        // $(this).val(ECCodeArr[i])
                        // $("#"+evt.id).val(ECCodeArr[i])
                    });
                }
                if (HCCodeArr.length > 0) {
                    $('.homeNoCode').each(function (i, evt) {
                        var ecID = HCCodeArr[i];
                        var idx = CCodeArr.indexOf(ecID);
                        evt["selectedIndex"] = idx;
                        // $(this).value=ecID
                        // $(this).val(ECCodeArr[i])
                        // $("#"+evt.id).val(ECCodeArr[i])
                    });
                }
                $(".addMobNo").click(function () {
                    multipleMobNo();
                });
                $(".addHomeNo").click(function () {
                    multipleHomeNo();
                });
                $(".addEmergencyNo").click(function () {
                    multipleEmergencyNo();
                });
                $(".addOfficeNo").click(function () {
                    multipleOfficeNo();
                });
                $("#EditedAddressDetails").html(OfficeAddArr.filter(function (add) { return SelectedUserProfile[0].Location == add.OfficePlace; })[0].OfficeFullAdd);
                $("#StaffFunctionEdit").val(SelectedUserProfile[0].Title);
                $("#StaffAffiliatesEdit").val(SelectedUserProfile[0].Affiliation);
                $("#PAddLineE").val(SelectedUserProfile[0].HAddLine);
                $("#PAddCityE").val(SelectedUserProfile[0].HAddCity);
                $("#PAddStateE").val(SelectedUserProfile[0].HAddState);
                $("#PAddPCodeE").val(SelectedUserProfile[0].HAddPCode);
                $("#PAddCountryE").val(SelectedUserProfile[0].HAddPCountry);
                $("#Eshortbio").val(SelectedUserProfile[0].ShortBio);
                $("#EIndustry").val(SelectedUserProfile[0].Industry);
                $("#ELanguage").val(SelectedUserProfile[0].Language);
                $("#ESDGCourse").val(SelectedUserProfile[0].SDGCourse);
                $("#ESoftwarExp").val(SelectedUserProfile[0].Software);
                $("#EMembership").val(SelectedUserProfile[0].Membership);
                $("#ESKnowledge").val(SelectedUserProfile[0].SpecialKnowledge);
                $("#citizenshipE").val(SelectedUserProfile[0].Citizen);
                $("#linkedInID").val(SelectedUserProfile[0].LinkedInID.Url);
                $("#children").val(SelectedUserProfile[0].Child);
                $("#significantOther").val(SelectedUserProfile[0].SignOther);
                $("#USDDailyEdit").val(SelectedUserProfile[0].USDDaily);
                $("#USDHourlyEdit").val(SelectedUserProfile[0].USDHourly);
                $("#EURDailyEdit").val(SelectedUserProfile[0].EURDaily);
                $("#EURHourlyEdit").val(SelectedUserProfile[0].EURHourly);
                $("#personalmailID").val(SelectedUserProfile[0].UserPersonalMail);
                $("#workLocationDD").val(SelectedUserProfile[0].Location);
                $("#staffstatusDD").val(SelectedUserProfile[0].StaffStatus);
                $("#othercurrDD").val(SelectedUserProfile[0].OtherCurr);
                $("#ODailyEdit").val(SelectedUserProfile[0].OtherCurrDaily);
                $("#OHourlyEdit").val(SelectedUserProfile[0].OtherCurrHourly);
                $("#BillingRateCommentsEdit").val(SelectedUserProfile[0].BillingRateComments);
                if (SelectedUserProfile[0].StaffStatus == "Part-time") {
                    $("#workscheduleEdit").html("");
                    $("#workscheduleEdit").html("<div class=\"d-flex w-100\" id=\"workscheduleSec\"> <label>Work Schedule</label><div class=\"w-100\"><input type=\"text\" id=\"workScheduleE\" value=\"" + (SelectedUserProfile[0].WorkSchedule == "" || SelectedUserProfile[0].WorkSchedule == null ? "" : SelectedUserProfile[0].WorkSchedule) + "\"></div></div>");
                }
                else {
                    $("#workscheduleEdit").html("");
                    $("#workscheduleEdit").html("<div class=\"d-flex w-100 hide\" id=\"workscheduleSec\"> <label>Work Schedule</label><div class=\"w-100\"><input type=\"text\" id=\"workScheduleE\" value=\"" + (SelectedUserProfile[0].WorkSchedule == "" || SelectedUserProfile[0].WorkSchedule == null ? "" : SelectedUserProfile[0].WorkSchedule) + "\"></div></div>");
                }
                if (SelectedUserProfile[0].AssistantMail) {
                    emailAddress = "i:0#.f|membership|" + SelectedUserProfile[0].AssistantMail.toLowerCase();
                    divID = "peoplepickerText_TopSpan";
                    SPClientPeoplePicker.SPClientPeoplePickerDict[divID].AddUnresolvedUser({
                        Key: emailAddress,
                        DisplayText: SelectedUserProfile[0].Assistant,
                        Email: SelectedUserProfile[0].AssistantMail.toLowerCase(),
                    }, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var editsubmitFunction = function () { return __awaiter(_this, void 0, void 0, function () {
    var mobNumUpdate, homeNumUpdate, emergencyNumUpdate, officeNumUpdate, mobNumbers, homeNumbers, emergencyNumbers, officeNumbers, dispTitle, pickerDiv, peoplePicker, userInfo, profileID, loginName, profile, insertObj, update, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mobNumUpdate = "";
                homeNumUpdate = "";
                emergencyNumUpdate = "";
                officeNumUpdate = "";
                mobNumbers = document.querySelectorAll(".mobNumbers");
                homeNumbers = document.querySelectorAll(".homeNumbers");
                emergencyNumbers = document.querySelectorAll(".emergencyNumbers");
                officeNumbers = document.querySelectorAll(".officeNumbers");
                mobNumbers.forEach(function (nums) {
                    if (nums.children[1]["value"] != "") {
                        mobNumUpdate += CCodeArr[nums.children[0]["options"].selectedIndex] + " - " + nums.children[1]["value"] + "^";
                    }
                });
                homeNumbers.forEach(function (nums) {
                    if (nums.children[1]["value"] != "") {
                        homeNumUpdate += CCodeArr[nums.children[0]["options"].selectedIndex] + " - " + nums.children[1]["value"] + "^";
                    }
                });
                emergencyNumbers.forEach(function (nums) {
                    if (nums.children[1]["value"] != "") {
                        emergencyNumUpdate += CCodeArr[nums.children[0]["options"].selectedIndex] + " - " + nums.children[1]["value"] + "^";
                    }
                });
                officeNumbers.forEach(function (nums) {
                    if (nums.children[1]["value"] != "") {
                        officeNumUpdate += CCodeArr[nums.children[0]["options"].selectedIndex] + " - " + nums.children[1]["value"] + "^";
                    }
                });
                if (bioAttachArr.length > 0) {
                    bioAttachArr.map(function (filedata) {
                        sp.web.folders
                            .add("/sites/StaffDirectory/BiographyDocument/" + selectedUsermail)
                            .then(function (data) {
                            sp.web
                                .getFolderByServerRelativeUrl(data.data.ServerRelativeUrl)
                                .files.add(filedata.name, filedata, true);
                        });
                    });
                }
                dispTitle = "APickerField";
                pickerDiv = $("[id$='peoplepickerText'][title='" + dispTitle + "']");
                peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict;
                userInfo = peoplePicker.peoplepickerText_TopSpan.GetAllUserInfo();
                profileID = 0;
                if (!(userInfo.length > 0)) return [3 /*break*/, 2];
                loginName = userInfo[0].Key.split("|")[2];
                return [4 /*yield*/, sp.web.siteUsers.getByEmail(loginName).get()];
            case 1:
                profile = _a.sent();
                profileID = profile.Id;
                _a.label = 2;
            case 2:
                insertObj = {};
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                if (IsAdminStaff) {
                    insertObj = {
                        Title: "SDG User Info",
                        PersonalEmail: $("#personalmailID").val(),
                        MobileNo: mobNumUpdate,
                        HomeNo: homeNumUpdate,
                        EmergencyNo: emergencyNumUpdate,
                        OfficeNo: officeNumUpdate,
                        HomeAddLine: $("#PAddLineE").val(),
                        HomeAddCity: $("#PAddCityE").val(),
                        HomeAddState: $("#PAddStateE").val(),
                        HomeAddPCode: $("#PAddPCodeE").val(),
                        HomeAddCountry: $("#PAddCountryE").val(),
                        IndustryExp: $("#EIndustry").val(),
                        LanguageExp: $("#ELanguage").val(),
                        SDGCourses: $("#ESDGCourse").val(),
                        SoftwareExp: $("#ESoftwarExp").val(),
                        Membership: $("#EMembership").val(),
                        SpecialKnowledge: $("#ESKnowledge").val(),
                        Citizenship: $("#citizenshipE").val(),
                        ShortBio: $("#Eshortbio").val(),
                        USDDailyRate: $("#USDDailyEdit").val(),
                        USDHourlyRate: $("#USDHourlyEdit").val(),
                        EURDailyRate: $("#EURDailyEdit").val(),
                        EURHourlyRate: $("#EURHourlyEdit").val(),
                        OtherCurrency: $("#othercurrDD").val(),
                        ODailyRate: $("#ODailyEdit").val(),
                        OHourlyRate: $("#OHourlyEdit").val(),
                        EffectiveDate: $("#EffectiveDateEdit").val(),
                        BillingRateComments: $("#BillingRateCommentsEdit").val(),
                        signother: $("#significantOther").val(),
                        children: $("#children").val(),
                        WorkingSchedule: $("#workScheduleE").val(),
                        SDGOffice: $("#workLocationDD").val(),
                        StaffStatus: $("#staffstatusDD").val(),
                        LinkedInLink: {
                            "__metadata": { type: "SP.FieldUrlValue" },
                            Description: "LinkedIn",
                            Url: $("#linkedInID").val()
                        },
                        stafffunction: $("#StaffFunctionEdit").val(),
                        SDGAffiliation: $("#StaffAffiliatesEdit").val(),
                        AssistantId: profileID
                    };
                }
                else {
                    insertObj = {
                        Title: "SDG User Info",
                        PersonalEmail: $("#personalmailID").val(),
                        MobileNo: mobNumUpdate,
                        HomeNo: homeNumUpdate,
                        EmergencyNo: emergencyNumUpdate,
                        OfficeNo: officeNumUpdate,
                        HomeAddLine: $("#PAddLineE").val(),
                        HomeAddCity: $("#PAddCityE").val(),
                        HomeAddState: $("#PAddStateE").val(),
                        HomeAddPCode: $("#PAddPCodeE").val(),
                        HomeAddCountry: $("#PAddCountryE").val(),
                        IndustryExp: $("#EIndustry").val(),
                        LanguageExp: $("#ELanguage").val(),
                        SDGCourses: $("#ESDGCourse").val(),
                        SoftwareExp: $("#ESoftwarExp").val(),
                        Membership: $("#EMembership").val(),
                        SpecialKnowledge: $("#ESKnowledge").val(),
                        Citizenship: $("#citizenshipE").val(),
                        ShortBio: $("#Eshortbio").val(),
                        signother: $("#significantOther").val(),
                        children: $("#children").val(),
                        WorkingSchedule: $("#workScheduleE").val(),
                        SDGOffice: $("#workLocationDD").val(),
                        StaffStatus: $("#staffstatusDD").val(),
                        LinkedInLink: {
                            "__metadata": { type: "SP.FieldUrlValue" },
                            Description: "LinkedIn",
                            Url: $("#linkedInID").val()
                        },
                        stafffunction: $("#StaffFunctionEdit").val(),
                        SDGAffiliation: $("#StaffAffiliatesEdit").val(),
                        AssistantId: profileID,
                    };
                }
                return [4 /*yield*/, sp.web
                        .getList(listUrl + "StaffDirectory")
                        .items.getById(ItemID)
                        .update(insertObj)];
            case 4:
                update = _a.sent();
                alertify
                    .alert("Submited Successfully", function () {
                    alertify.message('OK');
                    location.reload();
                });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                ErrorCallBack(error_1, "EditItems");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var editcancelFunction = function () {
    var viewDir = document.querySelector(".view-directory");
    var editDir = document.querySelector(".edit-directory");
    var editbtn = document.querySelector(".btn-edit");
    viewDir.classList.remove("hide");
    editDir.classList.add("hide");
    editbtn.classList.remove("hide");
    //  $('#peoplepickerText').children().remove();
    // sp-peoplepicker-editorInput
};
var useravailabilityDetails = function () { return __awaiter(_this, void 0, void 0, function () {
    var availTableHtml, options;
    return __generator(this, function (_a) {
        availList = AllAvailabilityDetails.filter(function (a) { return a.UserName.EMail.toLowerCase() == SelectedUserProfile[0].Usermail.toLowerCase(); });
        availTableHtml = "";
        availList.forEach(function (avail) {
            availTableHtml += "<tr><td>" + avail.Project + "</td><td>" + new Date(avail.StartDate).toLocaleDateString() + "</td><td>" + new Date(avail.EndDate).toLocaleDateString() + "</td><td>" + avail.Percentage + "%</td><td>" + avail.Comments + "</td><td><div class=\"d-flex\"><div class=\"action-btn action-edit\" data-toggle=\"modal\" data-target=\"#addprojectmodal\" data-id=\"" + avail.ID + "\" id=\"editProjectAvailability\"></div><div class=\"action-btn action-delete\" data-id=\"" + avail.ID + "\" id=\"deleteProjectAvailability\"> </div></div></td></tr>";
        });
        userAvailTable ? userAvailTable.destroy() : "";
        $("#UserAvailabilityTbody").html("");
        $("#UserAvailabilityTbody").html(availTableHtml);
        options = {
            destroy: true,
            order: [[0, "asc"]],
        };
        userAvailTable = $("#UserAvailabilityTable").DataTable(options);
        return [2 /*return*/];
    });
}); };
function removeSelectedfile(filename) {
    for (var i = 0; i < bioAttachArr.length; i++) {
        if (bioAttachArr[i].name == filename) {
            ///filesQuantity[i].remove();
            bioAttachArr.splice(i, 1);
            break;
        }
    }
}
var removeAvailProject = function (ID) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sp.web.getList(listUrl + "SDGAvailability").items.getById(ID).delete().then(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        location.reload();
                        return [2 /*return*/];
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var multipleMobNo = function () {
    $("#mobileNoSec").append("<div class=\"d-flex mobNumbers\"><select class=\"mobNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"mobileno1\"/><span class=\"removeMobNo remove-icon\"></span></div>");
};
var multipleHomeNo = function () {
    $("#homeNoSec").append("<div class=\"d-flex homeNumbers\"><select class=\"homeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"homeno1\"/><span class=\"removeHomeNo remove-icon\"></span></div>");
};
var multipleEmergencyNo = function () {
    $("#emergencyNoSec").append("<div class=\"d-flex emergencyNumbers\"><select class=\"emergencyNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"emergencyno1\"/><span class=\"removeemergencyNo remove-icon\"></span></div>");
};
var multipleOfficeNo = function () {
    $("#officeNoSec").append("<div class=\"d-flex officeNumbers\"><select class=\"officeNoCode\">" + CCodeHtml + "</select><input type=\"number\" class=\"mobNo\" id=\"officeno1\"/><span class=\"removeOfficeNo remove-icon\"></span></div>");
};
var fillEditSection = function (ID) {
    editID = ID;
    var editedData = availList.filter(function (e) { return e.Id == parseInt(ID); });
    if (editedData.length > 0) {
        var Sfinalmonth = "";
        var Sfinalday = "";
        var Sdd = new Date(editedData[0].StartDate).getDate();
        Sdd < 10 ? (Sfinalday = "0" + Sdd) : (Sfinalday = Sdd);
        var Smm = new Date(editedData[0].StartDate).getMonth() + 1;
        Smm < 10 ? (Sfinalmonth = "0" + Smm) : (Sfinalmonth = Smm);
        var Syyyy = new Date(editedData[0].StartDate).getFullYear();
        var Sdateformat = Syyyy + "-" + Sfinalmonth + "-" + Sfinalday;
        var Efinalmonth = "";
        var Efinalday = "";
        var Edd = new Date(editedData[0].EndDate).getDate();
        Edd < 10 ? (Efinalday = "0" + Edd) : (Efinalday = Edd);
        var Emm = new Date(editedData[0].EndDate).getMonth() + 1;
        Emm < 10 ? (Efinalmonth = "0" + Smm) : (Efinalmonth = Emm);
        var Eyyyy = new Date(editedData[0].EndDate).getFullYear();
        var Edateformat = Eyyyy + "-" + Efinalmonth + "-" + Efinalday;
        $("#projectName").val(editedData[0].Project);
        $("#projectStartDate").val(Sdateformat);
        $("#projectEndDate").val(Edateformat);
        $("#projectPercent").val(editedData[0].Percentage);
        $("#practiceAreaDD").val(editedData[0].ProjectArea);
        $("#client").val(editedData[0].Client);
        $("#projecttypeDD").val(editedData[0].ProjectType);
        $("#projectCode").val(editedData[0].ProjectCode);
        $("#ProjectLocation").val(editedData[0].ProjectLocation);
        $("#OtherPracticeArea").val(editedData[0].OtherProjectArea);
        $("#projectAvailNotes").val(editedData[0].Notes);
        $("#Projectcomments").val(editedData[0].Comments);
    }
};
var availSubmitFunc = function () { return __awaiter(_this, void 0, void 0, function () {
    var bwArray, isAllSuccess, sDate, eDate, startd, endd, newend, newDate, enteredPercentage, _loop_1, dayValue, correlationPercentage, i, state_1, ProjectPercent, submitProject;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bwArray = [];
                isAllSuccess = true;
                sDate = $("#projectStartDate").val();
                eDate = $("#projectEndDate").val();
                startd = new Date(sDate);
                endd = new Date(eDate);
                newend = endd.setDate(endd.getDate() + 1);
                endd = new Date(newend);
                while (startd < endd) {
                    bwArray.push(new Date(startd).toLocaleDateString() + " 00:00");
                    newDate = startd.setDate(startd.getDate() + 1);
                    startd = new Date(newDate);
                }
                enteredPercentage = parseInt($("#projectPercent").val());
                _loop_1 = function (i) {
                    var datearr = new Date(bwArray[i]);
                    var filteredData = [];
                    availList.filter(function (data) {
                        var sDate = new Date(new Date(data.StartDate).toLocaleDateString() + " 00:00");
                        var eDate = new Date(new Date(data.EndDate).toLocaleDateString() + " 00:00");
                        if (sDate <= datearr && eDate >= datearr) {
                            filteredData.push(data);
                        }
                    });
                    dayValue = filteredData.reduce(function (n, _a) {
                        var Percentage = _a.Percentage;
                        return n + parseInt(Percentage);
                    }, 0);
                    correlationPercentage = 100 - parseInt(dayValue);
                    if (enteredPercentage <= correlationPercentage) {
                        isAllSuccess = true;
                    }
                    else {
                        alertify.alert("Not able to add ur percentage in this date : " + datearr.toLocaleDateString());
                        isAllSuccess = false;
                        return "break";
                    }
                };
                // bwArray.map((datearr)=>{
                for (i = 0; i < bwArray.length; i++) {
                    state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
                ProjectPercent = 0;
                if (!isAllSuccess) return [3 /*break*/, 2];
                return [4 /*yield*/, sp.web.getList(listUrl + "SDGAvailability").items.add({
                        UserNameId: SelectedUserProfile[0].UserId,
                        Project: $("#projectName").val(),
                        StartDate: $("#projectStartDate").val(),
                        EndDate: $("#projectEndDate").val(),
                        Percentage: enteredPercentage.toString(),
                        ProjectArea: $("#practiceAreaDD").val(),
                        ProjectType: $("#projecttypeDD").val(),
                        Client: $("#client").val(),
                        ProjectCode: $("#projectCode").val(),
                        ProjectLocation: $("#ProjectLocation").val(),
                        OtherProjectArea: $("#OtherPracticeArea").val(),
                        Notes: $("#projectAvailNotes").val(),
                        Comments: $("#Projectcomments").val()
                    })];
            case 1:
                submitProject = _a.sent();
                $("#projectName").val("");
                $("#projectStartDate").val("");
                $("#projectEndDate").val("");
                $("#projectPercent").val("");
                $("#practiceAreaDD").val("");
                $("#projecttypeDD").val("");
                $("#client").val("");
                $("#projectCode").val("");
                $("#ProjectLocation").val("");
                $("#OtherPracticeArea").val("");
                $("#projectAvailNotes").val("");
                $("#Projectcomments").val("");
                alertify
                    .alert("Submited Successfully", function () {
                    alertify.message('OK');
                    location.reload();
                });
                return [3 /*break*/, 3];
            case 2:
                alertify.alert("Available Percentage is:" + correlationPercentage);
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
var availUpdateFunc = function () {
    var bwArray = [];
    var isAllSuccess = true;
    var sDate = $("#projectStartDate").val();
    var eDate = $("#projectEndDate").val();
    var startd = new Date(sDate);
    var endd = new Date(eDate);
    var newend = endd.setDate(endd.getDate() + 1);
    endd = new Date(newend);
    while (startd < endd) {
        bwArray.push(new Date(startd).toLocaleDateString() + " 00:00");
        var newDate = startd.setDate(startd.getDate() + 1);
        startd = new Date(newDate);
    }
    var enteredPercentage = parseInt($("#projectPercent").val());
    var _loop_2 = function (i) {
        var datearr = new Date(bwArray[i]);
        var filteredData = [];
        availList.filter(function (data) {
            var sDate = new Date(new Date(data.StartDate).toLocaleDateString() + " 00:00");
            var eDate = new Date(new Date(data.EndDate).toLocaleDateString() + " 00:00");
            if (sDate <= datearr && eDate >= datearr && data.Id != parseInt(editID)) {
                filteredData.push(data);
            }
        });
        dayValue = filteredData.reduce(function (n, _a) {
            var Percentage = _a.Percentage;
            return n + parseInt(Percentage);
        }, 0);
        correlationPercentage = 100 - parseInt(dayValue);
        if (enteredPercentage <= correlationPercentage) {
            isAllSuccess = true;
        }
        else {
            alertify.alert("Not able to add ur percentage in this date : " + datearr.toLocaleDateString());
            isAllSuccess = false;
            return "break";
        }
    };
    var dayValue, correlationPercentage;
    // bwArray.map((datearr)=>{
    for (var i = 0; i < bwArray.length; i++) {
        var state_2 = _loop_2(i);
        if (state_2 === "break")
            break;
    }
    var ProjectPercent = 0;
    // $("#projectPercent").val() == ""?ProjectPercent=0:ProjectPercent=parseInt(<any>$("#projectPercent").val())
    if (isAllSuccess) {
        var updateProject = sp.web
            .getList(listUrl + "SDGAvailability").items.getById(AvailEditID).update({
            Project: $("#projectName").val(),
            StartDate: $("#projectStartDate").val(),
            EndDate: $("#projectEndDate").val(),
            Percentage: enteredPercentage.toString(),
            ProjectArea: $("#practiceAreaDD").val(),
            ProjectType: $("#projecttypeDD").val(),
            Client: $("#client").val(),
            ProjectCode: $("#projectCode").val(),
            ProjectLocation: $("#ProjectLocation").val(),
            OtherProjectArea: $("#OtherPracticeAreaDiv").val(),
            Notes: $("#projectAvailNotes").val(),
            Comments: $("#Projectcomments").val()
        });
        $("#projectName").val("");
        $("#projectStartDate").val("");
        $("#projectEndDate").val("");
        $("#projectPercent").val("");
        $("#practiceAreaDD").val("");
        $("#projecttypeDD").val("");
        $("#client").val("");
        $("#projectCode").val("");
        $("#ProjectLocation").val("");
        $("#OtherPracticeArea").val("");
        $("#projectAvailNotes").val("");
        $("#Projectcomments").val("");
        AvailEditID = 0;
        AvailEditFlag = false;
        alertify
            .alert("Updated Successfully", function () {
            alertify.message('OK');
            location.reload();
        });
    }
    else {
        alertify.alert("Available Percentage is:" + correlationPercentage);
    }
};
var getGroups = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sp.web.currentUser.get().then(function (user) {
                    sp.web.siteUsers.getById(user.Id).groups.get()
                        .then(function (groupsData) {
                        groupsData.forEach(function (group) {
                            if (group.Title == "General Employees")
                                IsgeneralStaff = true;
                            else if (group.Title == "Special Access Employee")
                                IssplStaff = true;
                            else if (group.Title == "Staff Directory Admin")
                                IsAdminStaff = true;
                        });
                    });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
function mandatoryforaddaction() {
    var isAllvalueFilled = true;
    if (!$("#projecttypeDD").val()) {
        alertify.error("Please Select Project Type");
        isAllvalueFilled = false;
    }
    else if (!$("#projectName").val()) {
        alertify.error("Please enter Project Name");
        isAllvalueFilled = false;
    }
    else if (!$("#projectStartDate").val()) {
        alertify.error("Please select Start Date");
        isAllvalueFilled = false;
    }
    else if (!$("#projectEndDate").val()) {
        alertify.error("Please select End Date");
        isAllvalueFilled = false;
    }
    else if (!$("#projectPercent").val() && $("#projecttypeDD").val() == "Billable/Client" && $("#projecttypeDD").val() == "Marketing") {
        alertify.error("Please enter Percent on Project");
        isAllvalueFilled = false;
    }
    else if (!$("#client").val()) {
        alertify.error("Please enter Client");
        isAllvalueFilled = false;
    }
    else if (!$("#projectCode").val()) {
        alertify.error("Please enter Project Code");
        isAllvalueFilled = false;
    }
    else if (!$("#practiceAreaDD").val()) {
        alertify.error("Please enter Practice Area");
        isAllvalueFilled = false;
    }
    else if (!$("#ProjectLocation").val()) {
        alertify.error("Please enter Project Location");
        isAllvalueFilled = false;
    }
    else if (!$("#OtherPracticeArea").val() && $("#practiceAreaDD").val() == "Others, please specify") {
        alertify.error("Please enter Project Location");
        isAllvalueFilled = false;
    }
    else if (!$("#projectAvailNotes").val()) {
        alertify.error("Please enter Availability Notes");
        isAllvalueFilled = false;
    }
    else if (!$("#Projectcomments").val()) {
        alertify.error("Please enter Comments");
        isAllvalueFilled = false;
    }
    return isAllvalueFilled;
}
function ErrorCallBack(error, methodname) {
    return __awaiter(this, void 0, void 0, function () {
        var errordata, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errordata = {
                        Error: error.message,
                        MethodName: methodname,
                    };
                    return [4 /*yield*/, sp.web.lists
                            .getByTitle("ErrorLog")
                            .items.add(errordata)
                            .then(function (data) {
                            $('.loader').hide();
                            AlertMessage("Something went wrong.please contact system admin");
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    $('.loader').hide();
                    AlertMessage("Something went wrong.please contact system admin");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function AlertMessage(strMewssageEN) {
    alertify
        .alert()
        .setting({
        label: "OK",
        message: strMewssageEN,
        onok: function () {
            window.location.href = "#";
        },
    })
        .show()
        .setHeader("<em>Confirmation</em> ")
        .set("closable", false);
}
//# sourceMappingURL=StaffdirectoryWebPart.js.map