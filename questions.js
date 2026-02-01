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
                    solution: "In the slope-intercept form $y = mx + b$, the coefficient of $x$ is the slope. Here, $m = 3$."
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
                    solution: "A horizontal line has slope 0 and is written as $y = k$. Since it passes through $(2, 5)$, the equation is $y = 5$."
                },
                {
                    id: 6,
                    question: "If two lines are perpendicular, and one has a slope of $-\\frac{2}{3}$, what is the slope of the other line?",
                    options: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{3}{2}$", "$\\frac{3}{2}$"],
                    correctAnswer: 3,
                    solution: "The negative reciprocal of $-\\frac{2}{3}$ is $\\frac{3}{2}$."
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
                    solution: "$y = mx + b$. If $m=1$ and it passes through the origin ($b=0$), then $y = 1x + 0$ or $y = x$."
                }
            ]
        },

        module2: {
            title: "Module 2",
            subtitle: "Application & Analysis",
            description: "Find equations of parallel/perpendicular lines; intercepts; collinearity.",
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
                    solution: "Slope of the given line is $-2$. Perpendicular slope is $\\frac{1}{2}$. $y - 1 = \\frac{1}{2}(x - 4) \\rightarrow y = \\frac{1}{2}x - 2 + 1 \\rightarrow y = \\frac{1}{2}x - 1$."
                },
                {
                    id: 3,
                    question: "For what value of $k$ is the line $kx + 3y = 12$ parallel to $y = 4x - 1$?",
                    options: ["12", "-12", "4", "-4"],
                    correctAnswer: 1,
                    solution: "Rewrite $kx + 3y = 12$ as $y = -\\frac{k}{3}x + 4$. For parallel lines, slopes match: $-\\frac{k}{3} = 4 \\rightarrow -k = 12 \\rightarrow k = -12$."
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
                    solution: "Slope of $2x - 5y = 10$ is $\\frac{2}{5}$. A perpendicular slope is $-\\frac{5}{2}$. The line $5x + 2y = 8$ has slope $-\\frac{5}{2}$."
                },
                {
                    id: 6,
                    question: "Find the x-intercept of the line perpendicular to $y=3$ that passes through $(4, 7)$.",
                    options: ["3", "4", "7", "0"],
                    correctAnswer: 1,
                    solution: "A line perpendicular to the horizontal line $y=3$ is vertical. The vertical line through $(4,7)$ is $x=4$, so its x-intercept value is 4 (the intercept point is $(4,0)$)."
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
                    question: "A line has an undefined slope. Which statement is TRUE?",
                    options: ["It is parallel to the x-axis", "It is perpendicular to the x-axis", "It passes through the origin only", "It is a function"],
                    correctAnswer: 1,
                    solution: "Undefined slope means a vertical line. A vertical line meets the x-axis at 90 degrees, so it is perpendicular to the x-axis."
                },
                {
                    id: 9,
                    question: "Are the points A(1, 2), B(3, 8), and C(5, 14) collinear?",
                    options: ["Yes", "No"],
                    correctAnswer: 0,
                    solution: "$m_{AB} = \\frac{8-2}{3-1} = 3$. $m_{BC} = \\frac{14-8}{5-3} = 3$. Same slope and they share point B, so they are collinear."
                },
                {
                    id: 10,
                    question: "A ramp rises 4 feet for every 12 feet of horizontal distance. What is its slope?",
                    options: ["3", "$\\frac{1}{3}$", "4", "12"],
                    correctAnswer: 1,
                    solution: "Slope = rise/run = $\\frac{4}{12} = \\frac{1}{3}$."
                }
            ]
        },

        module3: {
            title: "Module 3",
            subtitle: "Complex Synthesis",
            description: "Perpendicular bisectors, systems, parameter values, and geometry facts.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "Find the value of $a$ if the lines $ax + 2y = 7$ and $3x - 4y = 12$ are perpendicular.",
                    options: ["$\\frac{8}{3}$", "$\\frac{3}{8}$", "$-\\frac{8}{3}$", "6"],
                    correctAnswer: 0,
                    solution: "$m_1 = -\\frac{a}{2}$. $m_2 = \\frac{3}{4}$. For perpendicular lines: $m_1 m_2 = -1$. So $(-\\frac{a}{2})(\\frac{3}{4})=-1 \\rightarrow -\\frac{3a}{8}=-1 \\rightarrow 3a=8 \\rightarrow a=\\frac{8}{3}$."
                },
                {
                    id: 2,
                    question: "Find the equation of the **perpendicular bisector** of the segment connecting $(2, 1)$ and $(6, 9)$.",
                    options: ["$y = -\\frac{1}{2}x + 7$", "$y = 2x - 3$", "$y = -\\frac{1}{2}x + 6$", "$y = -2x + 13$"],
                    correctAnswer: 0,
                    solution: "Midpoint: $(4,5)$. Segment slope: $\\frac{9-1}{6-2}=2$. Perpendicular slope: $-\\frac{1}{2}$. Line through midpoint: $y-5=-\\frac{1}{2}(x-4) \\rightarrow y=-\\frac{1}{2}x+7$."
                },
                {
                    id: 3,
                    question: "Find the distance between the parallel lines $y = 2x + 3$ and $y = 2x - 2$.",
                    options: ["5", "$\\sqrt{5}$", "$5\\sqrt{5}$", "1"],
                    correctAnswer: 1,
                    solution: "For $y=mx+c$, distance between parallels is $d=\\frac{|c_1-c_2|}{\\sqrt{1+m^2}}$. Here $m=2$, so $d=\\frac{|3-(-2)|}{\\sqrt{1+2^2}}=\\frac{5}{\\sqrt{5}}=\\sqrt{5}$."
                },
                {
                    id: 4,
                    question: "A triangle has vertices A(0,0), B(3,4), C(-4,3). Is it a right triangle?",
                    options: ["Yes, at A", "Yes, at B", "Yes, at C", "No"],
                    correctAnswer: 0,
                    solution: "$m_{AB}=\\frac{4}{3}$. $m_{AC}=\\frac{3}{-4}=-\\frac{3}{4}$. These are negative reciprocals, so angle A is $90^\\circ$."
                },
                {
                    id: 5,
                    question: "Find the equation of the line that is the reflection of $y = 2x + 3$ across the x-axis.",
                    options: ["$y = -2x - 3$", "$y = 2x - 3$", "$y = -2x + 3$", "$x = 2y + 3$"],
                    correctAnswer: 0,
                    solution: "Reflecting across the x-axis negates all y-values: $-y = 2x + 3 \\rightarrow y = -2x - 3$."
                },
                {
                    id: 6,
                    question: "Determine $k$ such that the line through $(k, 2)$ and $(1, 5)$ is perpendicular to $y = x$.",
                    options: ["4", "-2", "2", "-4"],
                    correctAnswer: 0,
                    solution: "Given line $y=x$ has slope $1$, so a perpendicular line has slope $-1$. Using slope formula for points $(k,2)$ and $(1,5)$: $\\frac{5-2}{1-k}=-1 \\rightarrow \\frac{3}{1-k}=-1 \\rightarrow 3=-(1-k) \\rightarrow 3=-1+k \\rightarrow k=4$."
                },
                {
                    id: 7,
                    question: "Find the area of the triangle formed by the line $2x + 3y = 6$, the x-axis, and the y-axis.",
                    options: ["3", "6", "2", "1.5"],
                    correctAnswer: 0,
                    solution: "x-intercept: set $y=0$: $2x=6 \\rightarrow x=3$. y-intercept: set $x=0$: $3y=6 \\rightarrow y=2$. Area $=\\frac{1}{2}(3)(2)=3$."
                },
                {
                    id: 8,
                    question: "Which of the following creates a system of equations with **no solution** when paired with $3x - y = 5$?",
                    options: ["$6x - 2y = 10$", "$6x - 2y = 7$", "$-3x + y = 5$", "$y = 3x - 5$"],
                    correctAnswer: 1,
                    solution: "No solution means parallel distinct lines (same slope, different intercept). $3x-y=5 \\rightarrow y=3x-5$. $6x-2y=7 \\rightarrow y=3x-3.5$. Same slope 3, different intercepts, so no solution."
                },
                {
                    id: 9,
                    question: "Line $L_1$ has slope $\\frac{a}{b}$. Line $L_2$ is perpendicular to $L_1$. What is the slope of $L_2$?",
                    options: ["$\\frac{a}{b}$", "$\\frac{b}{a}$", "$-\\frac{a}{b}$", "$-\\frac{b}{a}$"],
                    correctAnswer: 3,
                    solution: "Perpendicular slopes are negative reciprocals. The negative reciprocal of $\\frac{a}{b}$ is $-\\frac{b}{a}$."
                },
                {
                    id: 10,
                    question: "Find the coordinates of the **orthocenter** of a triangle with vertices at (0,0), (4,0), and (0,6).",
                    options: ["(0,0)", "(2,3)", "(4,6)", "(0,6)"],
                    correctAnswer: 0,
                    solution: "This is a right triangle with the right angle at (0,0). The orthocenter of a right triangle is the vertex at the right angle, so it is (0,0)."
                }
            ]
        },

        module4: {
            title: "Module 4",
            subtitle: "Advanced Coordinate Geometry",
            description: "Angle between lines, point-to-line distance, medians, centers, and invariants.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "Find the angle $\\theta$ between the lines $y=2x+1$ and $y=-x+4$.",
                    options: ["$\\arctan(3)$", "$\\arctan(\\frac{1}{3})$", "$\\arctan(2)$", "$\\arctan(\\frac{3}{2})$"],
                    correctAnswer: 0,
                    solution: "Slopes are $m_1=2$ and $m_2=-1$. $\\tan\\theta=\\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|=\\left|\\frac{2-(-1)}{1+2(-1)}\\right|=\\left|\\frac{3}{-1}\\right|=3$, so $\\theta=\\arctan(3)$."
                },
                {
                    id: 2,
                    question: "Find the distance from the point $(3,-1)$ to the line $2x - y + 4 = 0$.",
                    options: ["$\\frac{11}{\\sqrt{5}}$", "$\\frac{7}{\\sqrt{5}}$", "$\\frac{11}{5}$", "$\\frac{5}{11}$"],
                    correctAnswer: 0,
                    solution: "Use $d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$. Here $A=2,B=-1,C=4$. So $d=\\frac{|2(3)+(-1)(-1)+4|}{\\sqrt{2^2+(-1)^2}}=\\frac{|6+1+4|}{\\sqrt{5}}=\\frac{11}{\\sqrt{5}}$."
                },
                {
                    id: 3,
                    question: "A line passes through the intersection of $2x+y=5$ and $x-y=1$, and is perpendicular to $3x+4y=12$. What is its equation?",
                    options: [
                        "$y = \\frac{4}{3}x - \\frac{5}{3}$",
                        "$y = -\\frac{4}{3}x + \\frac{5}{3}$",
                        "$y = \\frac{3}{4}x - \\frac{5}{3}$",
                        "$y = -\\frac{3}{4}x + \\frac{5}{3}$"
                    ],
                    correctAnswer: 0,
                    solution: "Solve intersection: from $x-y=1$, $y=x-1$. Substitute into $2x+y=5$: $2x+(x-1)=5 \\rightarrow 3x=6 \\rightarrow x=2$, $y=1$. Line $3x+4y=12$ has slope $-3/4$, so perpendicular slope is $4/3$. Through $(2,1)$: $y-1=\\frac{4}{3}(x-2) \\rightarrow y=\\frac{4}{3}x-\\frac{5}{3}$."
                },
                {
                    id: 4,
                    question: "Find the equation of the median from $A(0,0)$ to side $BC$ in triangle $A(0,0)$, $B(6,2)$, $C(2,8)$.",
                    options: ["$y=\\frac{5}{4}x$", "$y=\\frac{4}{5}x$", "$y=\\frac{5}{2}x$", "$y=-\\frac{5}{4}x$"],
                    correctAnswer: 0,
                    solution: "Midpoint of $BC$ is $\\left(\\frac{6+2}{2},\\frac{2+8}{2}\\right)=(4,5)$. The median from $A(0,0)$ to $(4,5)$ has slope $5/4$, so equation is $y=\\frac{5}{4}x$."
                },
                {
                    id: 5,
                    question: "Find the centroid of the triangle with vertices $(1,2)$, $(7,-1)$, and $(4,5)$.",
                    options: ["$(4,2)$", "$(4,\\frac{2}{3})$", "$(\\frac{4}{3},2)$", "$(3,2)$"],
                    correctAnswer: 0,
                    solution: "Centroid is the average of coordinates: $\\left(\\frac{1+7+4}{3},\\frac{2+(-1)+5}{3}\\right)=(4,2)$."
                },
                {
                    id: 6,
                    question: "Find the circumcenter of the triangle with vertices $(0,0)$, $(6,0)$, and $(0,8)$.",
                    options: ["$(3,4)$", "$(0,0)$", "$(3,0)$", "$(0,4)$"],
                    correctAnswer: 0,
                    solution: "This is a right triangle with the right angle at $(0,0)$. The circumcenter of a right triangle is the midpoint of the hypotenuse between $(6,0)$ and $(0,8)$: $(\\frac{6+0}{2},\\frac{0+8}{2})=(3,4)$."
                },
                {
                    id: 7,
                    question: "Determine the relationship between $4x-6y=12$ and $2x-3y=6$.",
                    options: ["Parallel (no solution)", "Perpendicular", "Coincident (infinitely many solutions)", "Intersecting (one solution)"],
                    correctAnswer: 2,
                    solution: "Multiply $2x-3y=6$ by 2 to get $4x-6y=12$, which matches exactly. They are the same line (coincident), so there are infinitely many solutions."
                },
                {
                    id: 8,
                    question: "How many lines are parallel to $3x-4y=0$ and at a distance 2 from the origin?",
                    options: ["0", "1", "2", "Infinitely many"],
                    correctAnswer: 2,
                    solution: "Any line parallel to $3x-4y=0$ has form $3x-4y+c=0$. Distance from origin is $\\frac{|c|}{\\sqrt{3^2+(-4)^2}}=\\frac{|c|}{5}$. Set $\\frac{|c|}{5}=2 \\rightarrow |c|=10$, so $c=\\pm 10$. That gives 2 lines."
                },
                {
                    id: 9,
                    question: "The lines $y=x$ and $y=-x$ have two angle bisectors. Which bisector is a function (passes the vertical line test), and what is its slope?",
                    options: ["$x=0$ with slope 0", "$y=0$ with slope 0", "$x=0$ with slope undefined", "$y=0$ with slope undefined"],
                    correctAnswer: 1,
                    solution: "Angle bisectors are $y=0$ and $x=0$. Only $y=0$ is a function; its slope is 0."
                },
                {
                    id: 10,
                    question: "Find the area of the parallelogram with vertices $(0,0)$, $(2,1)$, $(3,4)$, and $(1,3)$.",
                    options: ["5", "6", "7", "8"],
                    correctAnswer: 0,
                    solution: "Using vectors from the origin: $\\vec{u}=(2,1)$ and $\\vec{v}=(1,3)$. Area $=|\\det([u\\ v])|=|2\\cdot 3-1\\cdot 1|=|6-1|=5$."
                }
            ]
        },

        module5: {
            title: "Module 5",
            subtitle: "Boss-Level Parameters & Geometry",
            description: "Hard parameter solving, loci/bisectors, centers, and tangency.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "For what value(s) of $k$ do the lines $x + ky = 3$ and $2x + 6y = 5$ meet at an angle of $45^\\circ$?",
                    options: ["$k=-2$", "$k=\\frac{1}{2}$", "$k=-2$ or $k=\\frac{1}{2}$", "$k=-\\frac{1}{3}$"],
                    correctAnswer: 2,
                    solution: "Slopes: $x+ky=3 \\rightarrow y=-\\frac{1}{k}x+\\frac{3}{k}$ so $m_1=-\\frac{1}{k}$. And $2x+6y=5 \\rightarrow y=-\\frac{1}{3}x+\\frac{5}{6}$ so $m_2=-\\frac{1}{3}$. For angle $45^\\circ$, $\\tan\\theta=1=\\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|=\\left|\\frac{k-3}{3k+1}\\right|$. So $|k-3|=|3k+1|$, giving $k=-2$ or $k=\\frac{1}{2}$."
                },
                {
                    id: 2,
                    question: "Find the locus of points equidistant from the parallel lines $y=2x+1$ and $y=2x-5$.",
                    options: ["$y=2x-2$", "$y=2x+3$", "$y=-2x-2$", "$x=2$"],
                    correctAnswer: 0,
                    solution: "For parallel lines $y=mx+c_1$ and $y=mx+c_2$, the midline equidistant from both is $y=mx+\\frac{c_1+c_2}{2}$. Here $m=2$, $c_1=1$, $c_2=-5$, so midpoint intercept is $\\frac{1+(-5)}{2}=-2$. Thus $y=2x-2$."
                },
                {
                    id: 3,
                    question: "Reflect the point $(2,-5)$ across the line $y=x$.",
                    options: ["$(-5,2)$", "$(5,-2)$", "$(-2,5)$", "$(2,5)$"],
                    correctAnswer: 0,
                    solution: "Reflection across $y=x$ swaps coordinates: $(x,y) \\mapsto (y,x)$. So $(2,-5)$ becomes $(-5,2)$."
                },
                {
                    id: 4,
                    question: "Find the circumcenter of the triangle with vertices $(0,0)$, $(6,0)$, and $(2,4)$.",
                    options: ["$(3,1)$", "$(3,2)$", "$(2,3)$", "$(4,1)$"],
                    correctAnswer: 0,
                    solution: "The circumcenter is the center of the circle through all three points. Computing via perpendicular bisectors gives center $(3,1)$."
                },
                {
                    id: 5,
                    question: "For which value(s) of $t$ are the points $(1,2)$, $(t,5)$, and $(4,t)$ collinear?",
                    options: ["$t=\\frac{3+\\sqrt{37}}{2}$ or $t=\\frac{3-\\sqrt{37}}{2}$", "$t=\\pm\\sqrt{37}$", "$t=\\frac{3}{2}$", "$t=7$"],
                    correctAnswer: 0,
                    solution: "Collinear means slopes match: $\\frac{5-2}{t-1}=\\frac{t-2}{4-1}$. So $\\frac{3}{t-1}=\\frac{t-2}{3} \\rightarrow 9=(t-1)(t-2)=t^2-3t+2$. Thus $t^2-3t-7=0$, giving $t=\\frac{3\\pm\\sqrt{37}}{2}$."
                },
                {
                    id: 6,
                    question: "A line passes through the intersection of $x+2y=7$ and $3x-y=5$, and is parallel to $4x+5y=20$. What is the equation of the line?",
                    options: ["$y=-\\frac{4}{5}x+\\frac{84}{35}$", "$y=\\frac{4}{5}x-\\frac{84}{35}$", "$y=-\\frac{5}{4}x+\\frac{84}{35}$", "$4x+5y=20$"],
                    correctAnswer: 0,
                    solution: "Intersection: solve $x+2y=7$ and $3x-y=5$ to get $(x,y)=(\\frac{17}{7},\\frac{16}{7})$. Line $4x+5y=20$ has slope $-4/5$. Through the point: $y-\\frac{16}{7}=-\\frac{4}{5}(x-\\frac{17}{7}) \\rightarrow y=-\\frac{4}{5}x+\\frac{12}{5}$, and $\\frac{12}{5}=\\frac{84}{35}$."
                },
                {
                    id: 7,
                    question: "Find the slopes of the angle bisectors of the lines $2x-y=0$ and $x+2y=0$.",
                    options: ["$\\frac{1}{3}$ and $-3$", "$3$ and $-\\frac{1}{3}$", "$\\frac{2}{3}$ and $-\\frac{3}{2}$", "$1$ and $-1$"],
                    correctAnswer: 0,
                    solution: "Angle bisectors satisfy $\\frac{|2x-y|}{\\sqrt{5}}=\\frac{|x+2y|}{\\sqrt{5}} \\Rightarrow 2x-y=\\pm(x+2y)$. Case 1: $2x-y=x+2y \\rightarrow x-3y=0 \\rightarrow y=\\frac{1}{3}x$. Case 2: $2x-y=-(x+2y) \\rightarrow 3x+y=0 \\rightarrow y=-3x$."
                },
                {
                    id: 8,
                    question: "A line has equal x- and y-intercepts and passes through $(1,1)$. What is its equation?",
                    options: ["$x+y=2$", "$x-y=0$", "$2x+2y=1$", "$x+y=1$"],
                    correctAnswer: 0,
                    solution: "Equal intercepts means intercept form $\\frac{x}{a}+\\frac{y}{a}=1 \\Rightarrow x+y=a$. Since it passes through $(1,1)$, $1+1=a \\Rightarrow a=2$. Thus $x+y=2$."
                },
                {
                    id: 9,
                    question: "Find the value(s) of $k$ such that the area of the triangle with vertices $(0,0)$, $(k,2)$, and $(4,6)$ is 10.",
                    options: ["$k=\\frac{14}{3}$ or $k=-2$", "$k=2$ or $k=-\\frac{14}{3}$", "$k=\\frac{7}{3}$ or $k=-1$", "$k=\\pm 2$"],
                    correctAnswer: 0,
                    solution: "Area with one vertex at origin is $\\frac{1}{2}|x_1y_2-x_2y_1|=\\frac{1}{2}|k\\cdot 6-4\\cdot 2|=\\frac{1}{2}|6k-8|$. Set equal to 10: $\\frac{1}{2}|6k-8|=10 \\rightarrow |6k-8|=20 \\rightarrow 6k-8=\\pm 20$. So $k=\\frac{28}{6}=\\frac{14}{3}$ or $k=\\frac{-12}{6}=-2$."
                },
                {
                    id: 10,
                    question: "A line is tangent to the circle $x^2+y^2=25$ and has slope $-\\frac{3}{4}$. What is the equation of the tangent line?",
                    options: ["$3x+4y=25$", "$4x+3y=25$", "$3x-4y=25$", "$3x+4y=5$"],
                    correctAnswer: 0,
                    solution: "For circle $x^2+y^2=r^2$, tangent at $(x_1,y_1)$ is $xx_1+yy_1=r^2$. Slope $-\\frac{3}{4}$ means radius slope is $\\frac{4}{3}$, so point lies on $y=\\frac{4}{3}x$. Substitute into circle: $x^2+\\frac{16}{9}x^2=25 \\rightarrow \\frac{25}{9}x^2=25 \\rightarrow x=3$, $y=4$. Tangent: $3x+4y=25$."
                }
            ]
        }
    }
};
