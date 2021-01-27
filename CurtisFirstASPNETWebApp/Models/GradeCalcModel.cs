using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CurtisFirstASPNETWebApp.Models
{
    public class GradeCalcModel
    {
        //create the attributes for the GradeCalcModel with getters and setters. Require that the user enters a number between 0 and 100
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; } // The following comments are just notes for myself =

        //public String assignments;

        //public int getAssignments()
        //{
        //    return assignments;
        //}

        //public void setAssignments(int x)
        //{
        //    assignments = x;
        //}
        [Required]
        [Range(0,100)]
        public int groupProject { get; set; }
        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public int exams { get; set; }
        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
