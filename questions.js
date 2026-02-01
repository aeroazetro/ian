window.questions = {
    geometry: {
        module1: {
            title: "Module 1",
            subtitle: "Slopes & Equations",
            description: "Slope formula, $y=mx+b$, properties.",
            difficulty: "Foundation",
            questions: [
                {
                    id: 1,
                    question: "What is the slope ($m$) of the line given by the equation $y = 3x - 5$?",
                    options: ["3", "-5", "5", "-3"],
                    correctAnswer: 0,
                    solution: "In the Slope-Intercept form $y = mx + b$, the coefficient of $x$ is the slope. Here, $m = 3$."
                },
                {
                    id: 2,
                    question: "Which of the following lines is **parallel** to the line $y = 2x + 1$?",
                    options: ["$y = 2x - 4$", "$y = -2x + 1$", "$y = \\frac{1}{2}x$", "$y = -\\frac{1}{2}x + 3$"],
                    correctAnswer: 0,
                    solution: "Parallel lines must have the **same slope**. The given line has slope 2. The line $y = 2x - 4$ also has slope 2."
                },
                {
                    id: 3,
                    question: "Which of the following lines is **perpendicular** to the line $y = 4x + 2$?",
                    options: ["$y = 4x - 2$", "$y = \\frac{1}{4}x + 2$", "$y = -\\frac{1}{4}x + 5$", "$y = -4x$"],
                    correctAnswer: 2,
                    solution: "Perpendicular lines have slopes that are **negative reciprocals** ($m_1 \\cdot m_2 = -1$). The negative reciprocal of 4 is $-\\frac{1}{4}$."
                },
                {
                    id: 4,
                    question: "What is the slope of the line passing through points $(1, 2)$ and $(3, 8)$?",
                    options: ["2", "3", "4", "6"],
                    correctAnswer: 1,
                    solution: "$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$$"
                },
                {
                    id: 5,
                    question: "Choose the equation of a horizontal line passing through $(2, 5)$.",
                    options: ["$x = 2$", "$y = 5$", "$y = 2x + 5$", "$x = 5$"],
                    correctAnswer: 1,
                    solution: "A horizontal line has a slope of 0 and is written as $y = k$. Since it passes through $(2, 5)$, the equation is $y = 5$."
                },
                {
                    id: 6,
                    question: "If two lines are perpendicular, and one has a slope of $-\\frac{2}{3}$, what is the slope of the other line?",
                    options: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{3}{2}$", "$\\frac{3}{2}$"],
                    correctAnswer: 3,
                    solution: "Negative reciprocal of $-\\frac{2}{3}$ is $\\frac{3}{2}$."
                },
                {
                    id: 7,
                    question: "Convert the equation $2x + y = 10$ to slope-intercept form ($y=mx+b$).",
                    options: ["$y = 2x + 10$", "$y = -2x + 10$", "$y = 2x - 10$", "$y = -2x - 10$"],
                    correctAnswer: 1,
                    solution: "Subtract $2x$ from both sides: $y = -2x + 10$."
                },
                {
                    id: 8,
                    question: "What is the y-intercept of the line $y = -x + 7$?",
                    options: ["$(0, -1)$", "$(0, 7)$", "$(7, 0)$", "$(-1, 0)$"],
                    correctAnswer: 1,
                    solution: "In $y = mx + b$, $b$ is the y-intercept. Here $b = 7$, so the point is $(0, 7)$."
                },
                {
                    id: 9,
                    question: "True or False: The line $x = 3$ is perpendicular to the line $y = 2$.",
                    options: ["True", "False"],
                    correctAnswer: 0,
                    solution: "$x = 3$ is a vertical line. $y = 2$ is a horizontal line. Vertical and horizontal lines are always perpendicular."
                },
                {
                    id: 10,
                    question: "Which equation represents a line that passes through $(0, 0)$ and has a slope of 1?",
                    options: ["$y = x$", "$y = x + 1$", "$y = 1$", "$x = 1$"],
                    correctAnswer: 0,
                    solution: "$y = mx + b$. If $m=1$ and it passes through origin ($b=0$), then $y = 1x + 0$ or $y = x$."
                }
            ]
        },
        module2: {
            title: "Module 2",
            subtitle: "Application & Analysis",
            description: "Find eq of parallel/perp lines, Analysis.",
            difficulty: "Intermediate",
            questions: [
                {
                    id: 1,
                    question: "Find the equation of a line parallel to $y = 3x - 2$ that passes through $(1, 4)$.",
                    options: ["$y = 3x + 1$", "$y = 3x - 4$", "$y = 3x + 7$", "$y = -\\frac{1}{3}x + 4$"],
                    correctAnswer: 0,
                    solution: "Parallel implies $m=3$. Using $y - y_1 = m(x - x_1)$: $y - 4 = 3(x - 1) \\rightarrow y = 3x - 3 + 4 \\rightarrow y = 3x + 1$."
                },
                {
                    id: 2,
                    question: "Find the equation of a line perpendicular to $y = -2x + 5$ passing through $(4, 1)$.",
                    options: ["$y = 2x - 7$", "$y = \\frac{1}{2}x - 1$", "$y = \\frac{1}{2}x + 1$", "$y = -2x + 9$"],
                    correctAnswer: 1,
                    solution: "Slope of given line is $-2$. Perpendicular slope is $\\frac{1}{2}$. $y - 1 = \\frac{1}{2}(x - 4) \\rightarrow y = \\frac{1}{2}x - 2 + 1 \\rightarrow y = \\frac{1}{2}x - 1$."
                },
                {
                    id: 3,
                    question: "For what value of $k$ is the line $kx + 3y = 12$ parallel to $y = 4x - 1$?",
                    options: ["12", "-12", "4", "-4"],
                    correctAnswer: 1,
                    solution: "Rewrite $kx + 3y = 12$ as $y = -\\frac{k}{3}x + 4$. For parallel, slope $-\\frac{k}{3} = 4 \\rightarrow -k = 12 \\rightarrow k = -12$."
                },
                {
                    id: 4,
                    question: "Convert the line with slope $-3$ passing through $(2, -5)$ into Standard Form $Ax + By = C$.",
                    options: ["$3x + y = 1$", "$3x + y = -11$", "$3x - y = 11$", "$-3x + y = -1$"],
                    correctAnswer: 0,
                    solution: "$y - (-5) = -3(x - 2) \\rightarrow y + 5 = -3x + 6 \\rightarrow 3x + y = 1$."
                },
                {
                    id: 5,
                    question: "Which of these lines is perpendicular to $2x - 5y = 10$?",
                    options: ["$2x - 5y = 0$", "$5x + 2y = 8$", "$5x - 2y = 8$", "$2x + 5y = 10$"],
                    correctAnswer: 1,
                    solution: "Slope of $2x - 5y = 10$ is $\\frac{2}{5}$. Perpendicular slope must be $-\\frac{5}{2}$. The line $5x + 2y = 8$ has slope $-\\frac{5}{2}$."
                },
                {
                    id: 6,
                    question: "Find the x-intercept of the line perpendicular to $y=3$ that passes through $(4, 7)$.",
                    options: ["3", "4", "7", "0"],
                    correctAnswer: 1,
                    solution: "Line perpendicular to horizontal $y=3$ is vertical. Vertical line through $(4,7)$ is $x=4$. its x-intercept is 4."
                },
                {
                    id: 7,
                    question: "Find the midpoint of the segment connecting the x-intercept and y-intercept of $3x + 4y = 12$.",
                    options: ["$(2, 1.5)$", "$(4, 3)$", "$(1.5, 2)$", "$(2, 2)$"],
                    correctAnswer: 0,
                    solution: "x-int ($y=0$): $3x=12 \\rightarrow x=4 \\rightarrow (4,0)$. y-int ($x=0$): $4y=12 \\rightarrow y=3 \\rightarrow (0,3)$. Midpoint: $(\\frac{4+0}{2}, \\frac{0+3}{2}) = (2, 1.5)$."
                },
                {
                    id: 8,
                    question: "A line has a slope of undefined. Which statement is TRUE?",
                    options: ["It is parallel to the x-axis", "It is perpendicular to the x-axis", "It passes through the origin only", "It is a function"],
                    correctAnswer: 1,
                    solution: "Undefined slope means a vertical line. A vertical line intersects the x-axis at 90 degrees."
                },
                {
                    id: 9,
                    question: "Are the points A(1, 2), B(3, 8), and C(5, 14) collinear?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    solution: "$m_{AB} = \\frac{6}{2} = 3$. $m_{BC} = \\frac{6}{2} = 3$. Slopes are equal and share a point, so they are collinear."
                },
                {
                    id: 10,
                    question: "A ramp rises 4 feet for every 12 feet of horizontal distance. What is its slope?",
                    options: ["3", "$\\frac{1}{3}$", "4", "12"],
                    correctAnswer: 1,
                    solution: "Slope = Rise / Run = $4 / 12 = 1/3$."
                }
            ]
        },
        module3: {
            title: "Module 3",
            subtitle: "Complex Synthesis",
            description: "Perpendicular bisectors, Systems, $k$-values.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "Find the value of $a$ if the lines $ax + 2y = 7$ and $3x - 4y = 12$ are perpendicular.",
                    options: ["$\\frac{8}{3}$", "$\\frac{3}{8}$", "$-\\frac{8}{3}$", "6"],
                    correctAnswer: 0,
                    solution: "$m_1 = -a/2$. $m_2 = 3/4$. For perp: $(-a/2)(3/4) = -1 \\rightarrow -3a/8 = -1 \\rightarrow 3a = 8 \\rightarrow a = 8/3$."
                },
                {
                    id: 2,
                    question: "Find the equation of the **Perpendicular Bisector** of the segment connecting $(2, 1)$ and $(6, 9)$.",
                    options: ["$y = -\\frac{1}{2}x + 7$", "$y = 2x - 3$", "$y = -\\frac{1}{2}x + 6$", "$y = -2x + 13$"],
                    correctAnswer: 0,
                    solution: "Midpoint: $(4, 5)$. Slope segment: $8/4 = 2$. Perp slope: $-1/2$. Eq: $y - 5 = -1/2(x - 4) \\rightarrow y = -1/2x + 2 + 5 \\rightarrow y = -1/2x + 7$."
                },
                {
                    id: 3,
                    question: "Find the distance between the parallel lines $y = 2x + 3$ and $y = 2x - 2$.",
                    options: ["5", "$\\sqrt{5}$", "$5\\sqrt{5}$", "1"],
                    correctAnswer: 1,
                    solution: "Formula $d = \\frac{|c_1 - c_2|}{\\sqrt{1+m^2}}$. $d = \\frac{|3 - (-2)|}{\\sqrt{1+2^2}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$."
                },
                {
                    id: 4,
                    question: "A triangle has vertices A(0,0), B(3,4), C(-4,3). Is it a right triangle?",
                    options: ["Yes, at A", "Yes, at B", "Yes, at C", "No"],
                    correctAnswer: 0,
                    solution: "$m_{AB} = 4/3$. $m_{AC} = -3/4$. Slopes are negative reciprocals, so angle A is 90 degrees."
                },
                {
                    id: 5,
                    question: "Find the equation of the line that is the reflection of $y = 2x + 3$ across the x-axis.",
                    options: ["$y = -2x - 3$", "$y = 2x - 3$", "$y = -2x + 3$", "$x = 2y + 3$"],
                    correctAnswer: 0,
                    solution: "Reflecting across x-axis negates y. $-y = 2x + 3 \\rightarrow y = -2x - 3$."
                },
                {
                    id: 6,
                    question: "Determing $k$ such that the line through $(k, 2)$ and $(1, 5)$ is perpendicular to $y = x$.",
                    options: ["4", "-2", "2", "-4"],
                    correctAnswer: 0,
                    solution: "Given line $y=x$ has $m=1$. Perpendicular must be $-1$. Slope formula: $\\frac{5-2}{1-k} = -1 \\rightarrow \\frac{3}{1-k} = -1 \\rightarrow 3 = -(1-k) \\rightarrow 3 = -1 + k \\rightarrow k = 4$."
                },
                {
                    id: 7,
                    question: "Find the area of the triangle formed by the line $2x + 3y = 6$, the x-axis, and the y-axis.",
                    options: ["3", "6", "2", "1.5"],
                    correctAnswer: 0,
                    solution: "x-intercept: 3 (base). y-intercept: 2 (height). Area = $1/2 \\cdot b \\cdot h = 1/2 \\cdot 3 \\cdot 2 = 3$."
                },
                {
                    id: 8,
                    question: "Which of the following creates a system of equations with **no solution** when paired with $3x - y = 5$?",
                    options: ["$6x - 2y = 10$", "$6x - 2y = 7$", "$-3x + y = 5$", "$y = 3x - 5$"],
                    correctAnswer: 1,
                    solution: "No solution means parallel lines (same slope, diff intercept). $3x - y = 5 \\rightarrow y = 3x - 5$. $6x - 2y = 7 \\rightarrow y = 3x - 3.5$. Same slope (3), different intercept."
                },
                {
                    id: 9,
                    question: "Line L1 has slope $a/b$. Line L2 is perpendicular to L1. What is the slope of L2?",
                    options: ["$a/b$", "$b/a$", "$-a/b$", "$-b/a$"],
                    correctAnswer: 3,
                    solution: "Negative reciprocal of $a/b$ is $-b/a$."
                },
                {
                    id: 10,
                    question: "Find the coordinates of the **orthocenter** of a triangle with vertices at (0,0), (4,0), and (0,6).",
                    options: ["(0,0)", "(2,3)", "(4,6)", "(0,6)"],
                    correctAnswer: 0,
                    solution: "Typically complex, but this is a Right Triangle (vertices on axes). The orthocenter of a right triangle is the vertex at the right angle: (0,0)."
                }
            ]
        }
    }
};
