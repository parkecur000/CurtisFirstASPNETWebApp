using CurtisFirstASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurtisFirstASPNETWebApp.Controllers
{
    public class FirstController : Controller //inherits from the Controller class
    {
        public IActionResult Index() //This is a method named Index()
        {
            return View(); //Default view returned is index. This will return a razerpage, not html
        }

        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
