using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission05_kbing321.Models
{
    // model for grade calculator
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Assignments percent must be between 0 and 100")]
        public float Assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Group Projects percent must be between 0 and 100")]
        public float Project { get; set; }
        [Range(0, 100, ErrorMessage = "Quizzes percent must be between 0 and 100")]
        public float Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Midterm Exam percent must be between 0 and 100")]
        public float Midterm { get; set; }
        [Range(0, 100, ErrorMessage = "Final Exam percent must be between 0 and 100")]
        public float Final { get; set; }
        [Range(0, 100, ErrorMessage = "INTEX percent must be between 0 and 100")]
        public float Intex { get; set; }
    }
}
