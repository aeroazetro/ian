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
            title: "Module 1",
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
                    question: "Find the sum of the x-intercept and y-intercept of the line $2x + 5y = 20$.",
                    options: ["10", "14", "4", "2"],
                    correctAnswer: 1,
                    solution: "x-intercept ($y=0$): $2x=20 \\rightarrow x=10$. y-intercept ($x=0$): $5y=20 \\rightarrow y=4$. Sum: $10+4=14$."
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

        intermediate1: {
            title: "Module 2",
            subtitle: "Classifying Segment Pairs",
            description: "Compute slopes of segments AB and CD, then decide: parallel, perpendicular, or neither.",
            difficulty: "Intermediate",
            questions: [
                {
                    id: 1,
                    question: "Segment AB: $A(\\tfrac{1}{2},\\tfrac{3}{2})$, $B(\\tfrac{5}{2},\\tfrac{7}{2})$;  Segment CD: $C(-\\tfrac{1}{2},\\tfrac{1}{2})$, $D(\\tfrac{3}{2},\\tfrac{5}{2})$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "Compute slopes.\\n\\n$\\displaystyle m_{AB}=\\frac{\\frac{7}{2}-\\frac{3}{2}}{\\frac{5}{2}-\\frac{1}{2}}=\\frac{2}{2}=1$.\\n$\\displaystyle m_{CD}=\\frac{\\frac{5}{2}-\\frac{1}{2}}{\\frac{3}{2}-(-\\frac{1}{2})}=\\frac{2}{2}=1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 2,
                    question: "Segment AB: $A(1,-2)$, $B(3,4)$;  Segment CD: $C(0,6)$, $D(2,0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{4-(-2)}{3-1}=\\frac{6}{2}=3$.\\n$\\displaystyle m_{CD}=\\frac{0-6}{2-0}=\\frac{-6}{2}=-3$.\\n\\nThey are negatives, but not negative reciprocals: $3\\cdot(-3)=-9\\neq-1$. So **Neither**."
                },
                {
                    id: 3,
                    question: "Segment AB: $A(-2,4)$, $B(4,-2)$;  Segment CD: $C(1,1)$, $D(7,-5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{-2-4}{4-(-2)}=\\frac{-6}{6}=-1$.\\n$\\displaystyle m_{CD}=\\frac{-5-1}{7-1}=\\frac{-6}{6}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 4,
                    question: "Segment AB: $A(2,1)$, $B(2,9)$;  Segment CD: $C(-3,4)$, $D(5,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\overline{AB}$ is vertical ($x=2$) so its slope is undefined.\\n$\\overline{CD}$ is horizontal ($y=4$) so its slope is $0$.\\n\\nVertical and horizontal lines meet at $90^\\circ$ $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 5,
                    question: "Segment AB: $A(-6,2)$, $B(-2,10)$;  Segment CD: $C(3,1)$, $D(9,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{10-2}{-2-(-6)}=\\frac{8}{4}=2$.\\n$\\displaystyle m_{CD}=\\frac{4-1}{9-3}=\\frac{3}{6}=\\frac{1}{2}$.\\n\\nNot equal (not parallel). Product $2\\cdot\\tfrac{1}{2}=1\\neq -1$ (not perpendicular). So **Neither**."
                },
                {
                    id: 6,
                    question: "Segment AB: $A(-1,5)$, $B(5,1)$;  Segment CD: $C(2,-3)$, $D(4,0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB}=\\frac{1-5}{5-(-1)}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{0-(-3)}{4-2}=\\frac{3}{2}$.\\n\\n$\\left(-\\frac{2}{3}\\right)\\left(\\frac{3}{2}\\right)=-1$ so slopes are negative reciprocals $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 7,
                    question: "Segment AB: $A(0,0)$, $B(8,6)$;  Segment CD: $C(-3,2)$, $D(1,5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{6-0}{8-0}=\\frac{6}{8}=\\frac{3}{4}$.\\n$\\displaystyle m_{CD}=\\frac{5-2}{1-(-3)}=\\frac{3}{4}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 8,
                    question: "Segment AB: $A(4,-1)$, $B(0,3)$;  Segment CD: $C(-2,6)$, $D(6,2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{3-(-1)}{0-4}=\\frac{4}{-4}=-1$.\\n$\\displaystyle m_{CD}=\\frac{2-6}{6-(-2)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n\\nNot equal. Product $(-1)\\left(-\\tfrac{1}{2}\\right)=\\tfrac{1}{2}\\neq-1$. So **Neither**."
                },
                {
                    id: 9,
                    question: "Segment AB: $A(4,-1)$, $B(0,3)$;  Segment CD: $C(-2,6)$, $D(2,2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{3-(-1)}{0-4}=\\frac{4}{-4}=-1$.\\n$\\displaystyle m_{CD}=\\frac{2-6}{2-(-2)}=\\frac{-4}{4}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 10,
                    question: "Segment AB: $A(-4,-2)$, $B(2,1)$;  Segment CD: $C(1,7)$, $D(3,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB}=\\frac{1-(-2)}{2-(-4)}=\\frac{3}{6}=\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{3-7}{3-1}=\\frac{-4}{2}=-2$.\\n\\n$\\left(\\frac{1}{2}\\right)(-2)=-1$ so they are **Perpendicular**."
                },
                {
                    id: 11,
                    question: "Segment AB: $A(-3,0)$, $B(5,0)$;  Segment CD: $C(2,-4)$, $D(2,9)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\overline{AB}$ is horizontal ($y=0$) so slope $0$.\\n$\\overline{CD}$ is vertical ($x=2$) so slope undefined.\\n\\nHorizontal $\\perp$ vertical $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 12,
                    question: "Segment AB: $A(\\tfrac{3}{2},-\\tfrac{1}{2})$, $B(\\tfrac{9}{2},\\tfrac{5}{2})$;  Segment CD: $C(-1,3)$, $D(2,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{\\frac{5}{2}-(-\\frac{1}{2})}{\\frac{9}{2}-\\frac{3}{2}}=\\frac{3}{3}=1$.\\n$\\displaystyle m_{CD}=\\frac{1-3}{2-(-1)}=\\frac{-2}{3}=-\\frac{2}{3}$.\\n\\nNot equal; product $1\\cdot(-\\tfrac{2}{3})=-\\tfrac{2}{3}\\neq-1$. So **Neither**."
                }
            ]
        },

        intermediate2: {
            title: "Module 3",
            subtitle: "Trickier Coordinates & Mixed Forms",
            description: "More challenging pairs (fractions, negatives, and careful slope checks).",
            difficulty: "Intermediate",
            questions: [
                {
                    id: 1,
                    question: "Segment AB: $A(-1,2)$, $B(7,-2)$;  Segment CD: $C(3,5)$, $D(5,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{-2-2}{7-(-1)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{1-5}{5-3}=\\frac{-4}{2}=-2$.\\n\\nNot equal and not negative reciprocals (product $=1$). So **Neither**."
                },
                {
                    id: 2,
                    question: "Segment AB: $A(-1,2)$, $B(7,-2)$;  Segment CD: $C(3,5)$, $D(11,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{-2-2}{7-(-1)}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n$\\displaystyle m_{CD}=\\frac{1-5}{11-3}=\\frac{-4}{8}=-\\frac{1}{2}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 3,
                    question: "Segment AB: $A(2,8)$, $B(6,0)$;  Segment CD: $C(-3,1)$, $D(1,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB}=\\frac{0-8}{6-2}=\\frac{-8}{4}=-2$.\\n$\\displaystyle m_{CD}=\\frac{3-1}{1-(-3)}=\\frac{2}{4}=\\frac{1}{2}$.\\n\\n$(-2)\\left(\\tfrac{1}{2}\\right)=-1$ $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 4,
                    question: "Segment AB: $A(\\tfrac{1}{3},\\tfrac{5}{3})$, $B(\\tfrac{7}{3},-\\tfrac{1}{3})$;  Segment CD: $C(2,4)$, $D(5,3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{-\\frac{1}{3}-\\frac{5}{3}}{\\frac{7}{3}-\\frac{1}{3}}=\\frac{-2}{2}=-1$.\\n$\\displaystyle m_{CD}=\\frac{3-4}{5-2}=\\frac{-1}{3}=-\\frac{1}{3}$.\\n\\nNot equal; perpendicular to slope $-1$ would be $1$, not $-\\tfrac{1}{3}$. So **Neither**."
                },
                {
                    id: 5,
                    question: "Segment AB: $A(\\tfrac{1}{3},\\tfrac{5}{3})$, $B(\\tfrac{7}{3},-\\tfrac{1}{3})$;  Segment CD: $C(2,4)$, $D(5,1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{-\\frac{1}{3}-\\frac{5}{3}}{\\frac{7}{3}-\\frac{1}{3}}=\\frac{-2}{2}=-1$.\\n$\\displaystyle m_{CD}=\\frac{1-4}{5-2}=\\frac{-3}{3}=-1$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 6,
                    question: "Segment AB: $A(0,5)$, $B(9,2)$;  Segment CD: $C(-2,1)$, $D(1,10)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB}=\\frac{2-5}{9-0}=\\frac{-3}{9}=-\\frac{1}{3}$.\\n$\\displaystyle m_{CD}=\\frac{10-1}{1-(-2)}=\\frac{9}{3}=3$.\\n\\n$\\left(-\\tfrac{1}{3}\\right)(3)=-1$ so **Perpendicular**."
                },
                {
                    id: 7,
                    question: "Segment AB: $A(-5,-1)$, $B(1,8)$;  Segment CD: $C(2,-2)$, $D(8,7)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{8-(-1)}{1-(-5)}=\\frac{9}{6}=\\frac{3}{2}$.\\n$\\displaystyle m_{CD}=\\frac{7-(-2)}{8-2}=\\frac{9}{6}=\\frac{3}{2}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 8,
                    question: "Segment AB: $A(-2,7)$, $B(4,7)$;  Segment CD: $C(3,-1)$, $D(3,5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\overline{AB}$ is horizontal ($y=7$).\\n$\\overline{CD}$ is vertical ($x=3$).\\n\\nHorizontal $\\perp$ vertical $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 9,
                    question: "Segment AB: $A(-8,3)$, $B(-2,-9)$;  Segment CD: $C(0,1)$, $D(6,-3)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{-9-3}{-2-(-8)}=\\frac{-12}{6}=-2$.\\n$\\displaystyle m_{CD}=\\frac{-3-1}{6-0}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n\\nNot equal; product $(-2)\\left(-\\tfrac{2}{3}\\right)=\\tfrac{4}{3}\\neq-1$. So **Neither**."
                },
                {
                    id: 10,
                    question: "Segment AB: $A(1,9)$, $B(7,5)$;  Segment CD: $C(-3,2)$, $D(0,\\tfrac{1}{2})$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{5-9}{7-1}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{\\frac{1}{2}-2}{0-(-3)}=\\frac{-\\frac{3}{2}}{3}=-\\frac{1}{2}$.\\n\\nNot equal and not negative reciprocals. So **Neither**."
                },
                {
                    id: 11,
                    question: "Segment AB: $A(1,9)$, $B(7,5)$;  Segment CD: $C(-3,2)$, $D(3,-2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB}=\\frac{5-9}{7-1}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n$\\displaystyle m_{CD}=\\frac{-2-2}{3-(-3)}=\\frac{-4}{6}=-\\frac{2}{3}$.\\n\\nSame slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 12,
                    question: "Segment AB: $A(-1,0)$, $B(2,6)$;  Segment CD: $C(5,1)$, $D(11,4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB}=\\frac{6-0}{2-(-1)}=\\frac{6}{3}=2$.\\n$\\displaystyle m_{CD}=\\frac{4-1}{11-5}=\\frac{3}{6}=\\frac{1}{2}$.\\n\\nNot parallel; product $2\\cdot\\tfrac{1}{2}=1\\neq-1$, so **Neither**."
                }
            ]
        },

        intermediate3: {
            title: "Module 4",
            subtitle: "Slope Mastery",
            description: "Strengthen your slope analysis with diverse segment pairs.",
            difficulty: "Intermediate",
            questions: [
                {
                    id: 1,
                    question: "Segment AB: $A(2, 5)$, $B(4, 9)$;  Segment CD: $C(-1, 2)$, $D(1, 6)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{9-5}{4-2} = \\frac{4}{2} = 2$. $m_{CD} = \\frac{6-2}{1-(-1)} = \\frac{4}{2} = 2$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 2,
                    question: "Segment AB: $A(3, -2)$, $B(5, -1)$;  Segment CD: $C(0, 4)$, $D(2, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = \\frac{-1-(-2)}{5-3} = \\frac{1}{2}$. $m_{CD} = \\frac{0-4}{2-0} = \\frac{-4}{2} = -2$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 3,
                    question: "Segment AB: $A(-3, -3)$, $B(0, 0)$;  Segment CD: $C(1, 5)$, $D(4, 8)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{0-(-3)}{0-(-3)} = 1$. $m_{CD} = \\frac{8-5}{4-1} = \\frac{3}{3} = 1$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 4,
                    question: "Segment AB: $A(2, 7)$, $B(2, -3)$;  Segment CD: $C(5, 4)$, $D(8, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "AB is vertical ($x=2$). CD is horizontal ($y=4$). Vertical $\\perp$ Horizontal $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 5,
                    question: "Segment AB: $A(0, 0)$, $B(5, 2)$;  Segment CD: $C(0, 0)$, $D(2, 5)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB} = \\frac{2}{5}$. $m_{CD} = \\frac{5}{2}$. Reciprocals but not negative reciprocals. So **Neither**."
                },
                {
                    id: 6,
                    question: "Segment AB: $A(1, 1)$, $B(4, 10)$;  Segment CD: $C(2, 2)$, $D(5, 11)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{10-1}{4-1} = \\frac{9}{3} = 3$. $m_{CD} = \\frac{11-2}{5-2} = \\frac{9}{3} = 3$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 7,
                    question: "Segment AB: $A(8, -1)$, $B(4, 1)$;  Segment CD: $C(-2, -3)$, $D(0, 1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = \\frac{1-(-1)}{4-8} = \\frac{2}{-4} = -\\frac{1}{2}$. $m_{CD} = \\frac{1-(-3)}{0-(-2)} = \\frac{4}{2} = 2$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 8,
                    question: "Segment AB: $A(-2, 5)$, $B(2, 3)$;  Segment CD: $C(1, 1)$, $D(5, -1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{3-5}{2-(-2)} = \\frac{-2}{4} = -\\frac{1}{2}$. $m_{CD} = \\frac{-1-1}{5-1} = \\frac{-2}{4} = -\\frac{1}{2}$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 9,
                    question: "Segment AB: $A(1, 4)$, $B(4, 5)$;  Segment CD: $C(2, 2)$, $D(6, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB} = \\frac{5-4}{4-1} = \\frac{1}{3}$. $m_{CD} = \\frac{4-2}{6-2} = \\frac{2}{4} = \\frac{1}{2}$. Not equal. So **Neither**."
                },
                {
                    id: 10,
                    question: "Segment AB: $A(-5, -5)$, $B(0, 0)$;  Segment CD: $C(0, 5)$, $D(5, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = 1$. $m_{CD} = \\frac{0-5}{5-0} = -1$. Product is $-1$ $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 11,
                    question: "Segment AB: $A(3, 2)$, $B(3, 8)$;  Segment CD: $C(5, 1)$, $D(5, -4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "Both are vertical lines ($x=3$ and $x=5$). Vertical lines are **Parallel**."
                },
                {
                    id: 12,
                    question: "Segment AB: $A(2, 3)$, $B(6, 5)$;  Segment CD: $C(1, 4)$, $D(3, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB} = \\frac{5-3}{6-2} = \\frac{2}{4} = \\frac{1}{2}$. $m_{CD} = \\frac{0-4}{3-1} = \\frac{-4}{2} = -2$. WAIT! $\\frac{1}{2} \\cdot (-2) = -1$. They ARE **Perpendicular**. (Correct answer is Perpendicular)."
                }
            ]
        },

        intermediate4: {
            title: "Module 5",
            subtitle: "Coordinate Challenge",
            description: "Test your skills with fractions, larger numbers, and tricky pairs.",
            difficulty: "Intermediate",
            questions: [
                {
                    id: 1,
                    question: "Segment AB: $A(\\frac{1}{4}, 2)$, $B(\\frac{5}{4}, 3)$;  Segment CD: $C(1, 1)$, $D(2, 2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{3-2}{\\frac{5}{4}-\\frac{1}{4}} = \\frac{1}{\\frac{4}{4}} = 1$. $m_{CD} = 1$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 2,
                    question: "Segment AB: $A(0, 0)$, $B(10, 20)$;  Segment CD: $C(0, 5)$, $D(10, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = 2$. $m_{CD} = \\frac{0-5}{10-0} = -\\frac{1}{2}$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 3,
                    question: "Segment AB: $A(-2.5, 1)$, $B(-0.5, 2)$;  Segment CD: $C(1, 3)$, $D(3, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{2-1}{-0.5-(-2.5)} = \\frac{1}{2}$. $m_{CD} = \\frac{4-3}{3-1} = \\frac{1}{2}$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 4,
                    question: "Segment AB: $A(100, 100)$, $B(102, 106)$;  Segment CD: $C(50, 50)$, $D(56, 48)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = \\frac{6}{2} = 3$. $m_{CD} = \\frac{-2}{6} = -\\frac{1}{3}$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 5,
                    question: "Segment AB: $A(1, 2)$, $B(4, 8)$;  Segment CD: $C(2, 1)$, $D(8, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB} = \\frac{6}{3} = 2$. $m_{CD} = \\frac{3}{6} = \\frac{1}{2}$. Reciprocals but not negative. So **Neither**."
                },
                {
                    id: 6,
                    question: "Segment AB: $A(\\frac{2}{3}, 1)$, $B(\\frac{5}{3}, 0)$;  Segment CD: $C(1, 1)$, $D(2, 2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = \\frac{0-1}{\\frac{3}{3}} = -1$. $m_{CD} = 1$. Negative reciprocals $\\Rightarrow$ **Perpendicular**."
                },
                {
                    id: 7,
                    question: "Segment AB: $A(-3, 2)$, $B(3, -2)$;  Segment CD: $C(-4, 0)$, $D(-1, -2)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{-4}{6} = -\\frac{2}{3}$. $m_{CD} = \\frac{-2}{3} = -\\frac{2}{3}$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 8,
                    question: "Segment AB: $A(0, 10)$, $B(5, 10)$;  Segment CD: $C(2, 3)$, $D(2, 7)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "Horizontal ($y=10$) $\\perp$ Vertical ($x=2$). **Perpendicular**."
                },
                {
                    id: 9,
                    question: "Segment AB: $A(0.1, 0.2)$, $B(0.2, 0.4)$;  Segment CD: $C(1, 2)$, $D(2, 4)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = \\frac{0.2}{0.1} = 2$. $m_{CD} = \\frac{2}{1} = 2$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 10,
                    question: "Segment AB: $A(1, 5)$, $B(3, 4)$;  Segment CD: $C(2, 2)$, $D(0, 1)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 2,
                    solution: "$\\displaystyle m_{AB} = -\\frac{1}{2}$. $m_{CD} = \\frac{-1}{-2} = \\frac{1}{2}$. Negatives but not reciprocals. **Neither**."
                },
                {
                    id: 11,
                    question: "Segment AB: $A(-5, 5)$, $B(0, 10)$;  Segment CD: $C(0, -5)$, $D(5, 0)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 0,
                    solution: "$\\displaystyle m_{AB} = 1$. $m_{CD} = 1$. Same slope $\\Rightarrow$ **Parallel**."
                },
                {
                    id: 12,
                    question: "Segment AB: $A(12, 4)$, $B(16, 2)$;  Segment CD: $C(5, 6)$, $D(6, 8)$.\\n\\nDetermine the relationship between $\\overline{AB}$ and $\\overline{CD}$.",
                    options: ["Parallel", "Perpendicular", "Neither"],
                    correctAnswer: 1,
                    solution: "$\\displaystyle m_{AB} = \\frac{-2}{4} = -\\frac{1}{2}$. $m_{CD} = \\frac{2}{1} = 2$. Product $-1$ $\\Rightarrow$ **Perpendicular**."
                }
            ]
        },

        module3: {
            title: "Module 1",
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
                    question: "Find the coordinates of the foot of the perpendicular from $(1, 2)$ to the line $x + y = 5$.",
                    options: ["$(2, 3)$", "$(3, 2)$", "$(2.5, 2.5)$", "$(1, 4)$"],
                    correctAnswer: 0,
                    solution: "Slope of $x+y=5$ is $-1$. Perp slope is $1$. Line through $(1,2)$ with slope 1: $y-2=1(x-1) \\rightarrow y=x+1$. Intersect $y=x+1$ and $x+y=5$: $x+(x+1)=5 \\rightarrow 2x=4 \\rightarrow x=2, y=3$."
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
                    question: "The line passing through $(2, 3)$ and $(6, k)$ is perpendicular to the line passing through $(2, 3)$ and $(k, 7)$. Find the value of $k$.",
                    options: ["2.5", "5", "3", "4.5"],
                    correctAnswer: 0,
                    solution: "Slope $m_1 = \\frac{k-3}{6-2} = \\frac{k-3}{4}$. Slope $m_2 = \\frac{7-3}{k-2} = \\frac{4}{k-2}$. Product $m_1 m_2 = -1$: $\\frac{k-3}{4} \\cdot \\frac{4}{k-2} = -1 \\Rightarrow \\frac{k-3}{k-2} = -1 \\Rightarrow k-3 = -k+2 \\Rightarrow 2k=5 \\Rightarrow k=2.5$."
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
            title: "Module 2",
            subtitle: "Advanced Coordinate Geometry",
            description: "Area of triangles, point-to-line distance, medians, and centers.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "Find the area of the triangle with vertices $(0,0)$, $(6,0)$, and $(2,5)$.",
                    options: ["15", "30", "12", "10"],
                    correctAnswer: 0,
                    solution: "Base is along x-axis from 0 to 6 (length 6). Height is the y-coordinate of the third vertex (5). Area = $\\frac{1}{2}(6)(5) = 15$."
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
                    question: "Find the length of the altitude from $C$ to $AB$ for the triangle with vertices $A(0,0)$, $B(8,0)$, and $C(5, 6)$.",
                    options: ["6", "5", "8", "4"],
                    correctAnswer: 0,
                    solution: "The base $AB$ lies on the x-axis ($y=0$). The altitude from $C(5,6)$ is simply the perpendicular distance to the x-axis, which is the y-coordinate: 6."
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
            title: "Module 3",
            subtitle: "Boss-Level Parameters & Geometry",
            description: "Coordinate proofs, partitions, optimization, and synthesis.",
            difficulty: "Elite",
            questions: [
                {
                    id: 1,
                    question: "Find the centroid of the triangle with vertices $(2, 1)$, $(6, 3)$, and $(4, -1)$.",
                    options: ["$(4, 1)$", "$(3, 1)$", "$(4, 2)$", "$(5, 1)$"],
                    correctAnswer: 0,
                    solution: "Centroid formula: $\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)$. $x = \\frac{2+6+4}{3}=4$. $y = \\frac{1+3-1}{3}=1$. Centroid is $(4, 1)$."
                },
                {
                    id: 2,
                    question: "Find the coordinates of the point that partitions the segment from $(1, 1)$ to $(9, 5)$ in the ratio $1:3$ (close to first point).",
                    options: ["$(3, 2)$", "$(5, 3)$", "$(2, 2)$", "$(7, 4)$"],
                    correctAnswer: 0,
                    solution: "Section formula: $\\left(\\frac{nx_1+mx_2}{m+n}, \\frac{ny_1+my_2}{m+n}\\right)$ with ratio $m:n = 1:3$. $(x,y) = (\\frac{3(1)+1(9)}{4}, \\frac{3(1)+1(5)}{4}) = (\\frac{12}{4}, \\frac{8}{4}) = (3, 2)$."
                },
                {
                    id: 3,
                    question: "What is the distance between the x-intercept and y-intercept of the line $3x - 4y = 12$?",
                    options: ["5", "7", "6", "12"],
                    correctAnswer: 0,
                    solution: "x-int: $3x=12 \\rightarrow (4,0)$. y-int: $-4y=12 \\rightarrow (0,-3)$. Distance $\\sqrt{(4-0)^2 + (0-(-3))^2} = \\sqrt{16+9} = \\sqrt{25} = 5$."
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
                    question: "A line with slope 2 passes through points $(3, k)$ and $(1, 4)$. Find $k$.",
                    options: ["8", "6", "0", "-1"],
                    correctAnswer: 0,
                    solution: "Slope formula: $\\frac{k - 4}{3 - 1} = 2$. $\\frac{k-4}{2} = 2 \\rightarrow k-4=4 \\rightarrow k=8$."
                },
                {
                    id: 6,
                    question: "A line passes through the intersection of $x+2y=7$ and $3x-y=5$, and is parallel to $4x+5y=20$. What is the equation of the line?",
                    options: ["$y=-\\frac{4}{5}x+\\frac{148}{35}$", "$y=\\frac{4}{5}x-\\frac{148}{35}$", "$y=-\\frac{5}{4}x+\\frac{148}{35}$", "$4x+5y=20$"],
                    correctAnswer: 0,
                    solution: "Intersection of $x+2y=7$ and $3x-y=5$ is $(\\frac{17}{7},\\frac{16}{7})$. A line parallel to $4x+5y=20$ has slope $-\\frac{4}{5}$. So $y-\\frac{16}{7}=-\\frac{4}{5}(x-\\frac{17}{7})\\Rightarrow y=-\\frac{4}{5}x+\\frac{148}{35}$."
                },
                {
                    id: 7,
                    question: "If the midpoint of a segment is $(2, 3)$ and one endpoint is $(-1, 1)$, what is the other endpoint?",
                    options: ["$(5, 5)$", "$(0.5, 2)$", "$(1, 2)$", "$(3, 2)$"],
                    correctAnswer: 0,
                    solution: "Midpoint $M = \\frac{P_1+P_2}{2}$. $P_2 = 2M - P_1$. $x = 2(2) - (-1) = 5$. $y = 2(3) - 1 = 5$. Endpoint is $(5, 5)$."
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
                    question: "Find the shortest distance from the origin $(0,0)$ to the line $3x + 4y = 20$.",
                    options: ["4", "5", "3", "20"],
                    correctAnswer: 0,
                    solution: "Use point-to-line formula: $d = \\frac{|Ax_1 + By_1 - C|}{\\sqrt{A^2+B^2}}$. $d = \\frac{|3(0) + 4(0) - 20|}{\\sqrt{3^2+4^2}} = \\frac{|-20|}{5} = \\frac{20}{5} = 4$."
                }
            ]
        }
    },
    polynomials: {
        "poly_module1": {
            "title": "Module 1",
            "subtitle": "Polynomial Functions Basics",
            "description": "Identify polynomials, degree, leading coefficient, standard form, and basic evaluation/simplifying.",
            "difficulty": "Foundation",
            "questions": [
                {
                    "id": 1,
                    "question": "Which of the following is a **polynomial** in $x$?",
                    "options": ["$3x^2-5x+1$", "$\\dfrac{2}{x}+1$", "$\\sqrt{x}+4$", "$3^{x}$"],
                    "correctAnswer": 0,
                    "solution": "A polynomial has only **nonnegative integer** exponents on $x$ and no $x$ in denominators or radicals. Only $3x^2-5x+1$ fits."
                },
                {
                    "id": 2,
                    "question": "What is the **degree** of $P(x)=7x^4-2x^2+9$?",
                    "options": ["2", "4", "6", "9"],
                    "correctAnswer": 1,
                    "solution": "The degree is the highest exponent of $x$. Here the highest power is $4$."
                },
                {
                    "id": 3,
                    "question": "Find the **leading coefficient** of $f(x)=-5x^3+2x-8$.",
                    "options": ["$-5$", "$5$", "$-8$", "$2$"],
                    "correctAnswer": 0,
                    "solution": "The leading term is the term with highest power: $-5x^3$. Its coefficient is $-5$."
                },
                {
                    "id": 4,
                    "question": "Put $g(x)=2-3x+4x^2$ in **standard form**.",
                    "options": ["$2-3x+4x^2$", "$4x^2-3x+2$", "$-3x+4x^2+2$", "$4x^2+2-3x$"],
                    "correctAnswer": 1,
                    "solution": "Standard form lists terms from highest degree to constant: $4x^2-3x+2$."
                },
                {
                    "id": 5,
                    "question": "Evaluate $P(2)$ if $P(x)=x^2-3x+4$.",
                    "options": ["2", "3", "4", "6"],
                    "correctAnswer": 0,
                    "solution": "Substitute $x=2$: $P(2)=2^2-3(2)+4=4-6+4=2$."
                },
                {
                    "id": 6,
                    "question": "Evaluate $f(-1)$ if $f(x)=2x^3-x+5$.",
                    "options": ["2", "4", "6", "8"],
                    "correctAnswer": 1,
                    "solution": "Compute: $f(-1)=2(-1)^3-(-1)+5=-2+1+5=4$."
                },
                {
                    "id": 7,
                    "question": "Simplify: $(3x^2+2x-1) + (x^2-5x+4)$.",
                    "options": ["$4x^2-3x+3$", "$4x^2+7x+3$", "$2x^2-3x+3$", "$4x^2-7x+3$"],
                    "correctAnswer": 0,
                    "solution": "Add like terms: $(3x^2+x^2)=4x^2$, $(2x-5x)=-3x$, $(-1+4)=3$."
                },
                {
                    "id": 8,
                    "question": "Simplify: $(5x^3-2x^2+7) - (x^3+4x^2-3)$.",
                    "options": ["$4x^3-6x^2+10$", "$4x^3+2x^2+4$", "$6x^3-6x^2+4$", "$4x^3-6x^2+4$"],
                    "correctAnswer": 0,
                    "solution": "Distribute the minus then combine: $5x^3-2x^2+7 -x^3-4x^2+3 =4x^3-6x^2+10$."
                },
                {
                    "id": 9,
                    "question": "Which term is the **constant term** of $h(x)=9x^2-4x+11$?",
                    "options": ["$9x^2$", "$-4x$", "$11$", "$9$"],
                    "correctAnswer": 2,
                    "solution": "The constant term has no $x$. It is $11$."
                },
                {
                    "id": 10,
                    "question": "If $P(x)$ has degree 1, what kind of function is it?",
                    "options": ["Quadratic", "Linear", "Cubic", "Exponential"],
                    "correctAnswer": 1,
                    "solution": "Degree 1 polynomials are linear functions."
                },
                {
                    "id": 11,
                    "question": "Which expression is **not** a polynomial because it has a negative exponent?",
                    "options": ["$x^3-2x$", "$4x^{-1}+7$", "$2x^2+1$", "$5$"],
                    "correctAnswer": 1,
                    "solution": "A polynomial cannot contain $x^{-1}$ (negative exponent)."
                },
                {
                    "id": 12,
                    "question": "Find the value of the coefficient $k$ if $P(x)=kx^2-6x+1$ and the leading coefficient is 5.",
                    "options": ["$k=1$", "$k=-6$", "$k=5$", "$k=6$"],
                    "correctAnswer": 2,
                    "solution": "The leading term is $kx^2$ so the leading coefficient is $k$. Set $k=5$."
                },
                {
                    "id": 13,
                    "question": "Simplify: $2(3x^2-4x+1)$.",
                    "options": ["$6x^2-8x+2$", "$6x^2-2x+1$", "$3x^2-8x+2$", "$6x^2+8x+2$"],
                    "correctAnswer": 0,
                    "solution": "Distribute 2 to each term: $2\\cdot3x^2=6x^2$, $2\\cdot(-4x)=-8x$, $2\\cdot1=2$."
                },
                {
                    "id": 14,
                    "question": "What is the value of $P(0)$ for $P(x)=4x^3-x+9$?",
                    "options": ["0", "4", "9", "$-9$"],
                    "correctAnswer": 2,
                    "solution": "Plug in $x=0$: $P(0)=0-0+9=9$. This is also the y-intercept."
                },
                {
                    "id": 15,
                    "question": "Which statement is ALWAYS true for a polynomial function?",
                    "options": ["It has a square root", "It has a denominator with $x$", "It is defined for all real $x$", "It has degree 0 only"],
                    "correctAnswer": 2,
                    "solution": "Polynomials have no division by $x$ or radicals, so they are defined for all real numbers."
                }
            ]
        },
        "poly_module2": {
            "title": "Module 2",
            "subtitle": "Operations & Simple Factoring",
            "description": "Add/subtract/multiply polynomials, factor common patterns, and connect factors to zeros.",
            "difficulty": "Intermediate",
            "questions": [
                {
                    "id": 1,
                    "question": "Simplify: $(2x^2-3x+5) + (x^2+7x-9)$.",
                    "options": ["$3x^2+4x-4$", "$3x^2-10x+14$", "$x^2+4x-4$", "$3x^2+10x-14$"],
                    "correctAnswer": 0,
                    "solution": "Combine like terms: $2x^2+x^2=3x^2$, $-3x+7x=4x$, $5-9=-4$."
                },
                {
                    "id": 2,
                    "question": "Simplify: $(4x^3- x^2+2x) - (x^3+3x^2-5x)$.",
                    "options": ["$3x^3-4x^2+7x$", "$5x^3+2x^2-3x$", "$3x^3-2x^2-3x$", "$3x^3+2x^2+7x$"],
                    "correctAnswer": 0,
                    "solution": "Subtract term-by-term: $4x^3-x^3=3x^3$, $-x^2-3x^2=-4x^2$, $2x-(-5x)=7x$."
                },
                {
                    "id": 3,
                    "question": "Multiply: $(-3x)(2x^2-5x+4)$.",
                    "options": ["$-6x^3+15x^2-12x$", "$-6x^3-15x^2-12x$", "$6x^3-15x^2+12x$", "$-6x^2+15x-12$"],
                    "correctAnswer": 0,
                    "solution": "Distribute $-3x$: $(-3x)(2x^2)=-6x^3$, $(-3x)(-5x)=15x^2$, $(-3x)(4)=-12x$."
                },
                {
                    "id": 4,
                    "question": "Expand: $(x+5)(x-2)$.",
                    "options": ["$x^2+3x-10$", "$x^2-3x-10$", "$x^2+7x-10$", "$x^2+3x+10$"],
                    "correctAnswer": 0,
                    "solution": "FOIL: $x^2-2x+5x-10=x^2+3x-10$."
                },
                {
                    "id": 5,
                    "question": "Expand: $(2x-3)^2$.",
                    "options": ["$4x^2-12x+9$", "$4x^2-6x+9$", "$4x^2+12x+9$", "$2x^2-12x+9$"],
                    "correctAnswer": 0,
                    "solution": "$(a-b)^2=a^2-2ab+b^2$: $(2x)^2-2(2x)(3)+3^2=4x^2-12x+9$."
                },
                {
                    "id": 6,
                    "question": "Factor: $6x^2+9x$.",
                    "options": ["$3x(2x+3)$", "$6x(x+9)$", "$9x(\\tfrac{2}{3}x+1)$", "$x(6x+9)$"],
                    "correctAnswer": 0,
                    "solution": "Greatest common factor is $3x$. Factor: $6x^2+9x=3x(2x+3)$."
                },
                {
                    "id": 7,
                    "question": "Factor: $x^2-16$.",
                    "options": ["$(x-4)^2$", "$(x-4)(x+4)$", "$(x-8)(x+2)$", "Prime"],
                    "correctAnswer": 1,
                    "solution": "Difference of squares: $a^2-b^2=(a-b)(a+b)$. Here $x^2-4^2=(x-4)(x+4)$."
                },
                {
                    "id": 8,
                    "question": "Factor completely: $x^2+5x+6$.",
                    "options": ["$(x+2)(x+3)$", "$(x-2)(x-3)$", "$(x+1)(x+6)$", "Prime"],
                    "correctAnswer": 0,
                    "solution": "Find two numbers that multiply to 6 and add to 5: 2 and 3. So $(x+2)(x+3)$."
                },
                {
                    "id": 9,
                    "question": "Solve: $x^2-9=0$.",
                    "options": ["$x=9$ only", "$x=-9$ only", "$x=3$ or $x=-3$", "$x=\\pm 9$"],
                    "correctAnswer": 2,
                    "solution": "Factor: $x^2-9=(x-3)(x+3)=0$. So $x=3$ or $x=-3$."
                },
                {
                    "id": 10,
                    "question": "If $P(x)=(x-1)(x+4)$, what are the zeros of $P(x)$?",
                    "options": ["$1$ and $4$", "$-1$ and $-4$", "$1$ and $-4$", "$-1$ and $4$"],
                    "correctAnswer": 2,
                    "solution": "Set each factor to zero: $x-1=0\\Rightarrow x=1$, $x+4=0\\Rightarrow x=-4$."
                },
                {
                    "id": 11,
                    "question": "What is the y-intercept of $P(x)=x^3-2x^2+5$?",
                    "options": ["$-2$", "$0$", "$5$", "$1$"],
                    "correctAnswer": 2,
                    "solution": "The y-intercept is $P(0)=5$."
                },
                {
                    "id": 12,
                    "question": "Which polynomial has **odd degree**?",
                    "options": ["$x^4-1$", "$3x^3+x$", "$2x^2+7$", "$5$"],
                    "correctAnswer": 1,
                    "solution": "Odd degree means highest exponent is odd. $3x^3+x$ has degree 3."
                },
                {
                    "id": 13,
                    "question": "The graph of a polynomial with **even degree** and **positive** leading coefficient goes…",
                    "options": ["Up on the left, up on the right", "Down on the left, down on the right", "Up on the left, down on the right", "Down on the left, up on the right"],
                    "correctAnswer": 0,
                    "solution": "Even degree + positive leading coefficient: both ends rise."
                },
                {
                    "id": 14,
                    "question": "Compute $P(3)$ if $P(x)=2x^2-x-1$.",
                    "options": ["14", "15", "16", "17"],
                    "correctAnswer": 0,
                    "solution": "$P(3)=2(3^2)-3-1=2(9)-4=18-4=14$."
                },
                {
                    "id": 15,
                    "question": "Which statement about polynomial graphs is true?",
                    "options": ["They can have holes like rational graphs", "They can jump (discontinuous)", "They are continuous (no breaks)", "They always stay above the x-axis"],
                    "correctAnswer": 2,
                    "solution": "Polynomials are continuous for all real $x$, so their graphs have no breaks or holes."
                }
            ]
        },
        "poly_module3": {
            "title": "Module 3",
            "subtitle": "Polynomial Behavior & Modeling",
            "description": "Still PSHS G8 scope: operations, evaluation, degree/leading term, zeros from given factors, and basic end behavior.",
            "difficulty": "Elite",
            "questions": [
                {
                    "id": 1,
                    "question": "What is the **degree** and **leading coefficient** of $P(x)= -3x^4 + 5x^2 - x + 9$?",
                    "options": ["degree 4, leading coefficient $-3$", "degree 4, leading coefficient $5$", "degree 2, leading coefficient $5$", "degree 9, leading coefficient $9$"],
                    "correctAnswer": 0,
                    "solution": "The highest power is $x^4$, so the degree is 4. The coefficient of $x^4$ is $-3$, so the leading coefficient is $-3$."
                },
                {
                    "id": 2,
                    "question": "Evaluate $P(2)$ if $P(x)=x^3-4x^2+2x+1$.",
                    "options": ["$-3$", "$1$", "$5$", "$9$"],
                    "correctAnswer": 0,
                    "solution": "Substitute $x=2$: $P(2)=2^3-4(2^2)+2(2)+1=8-16+4+1=-3$."
                },
                {
                    "id": 3,
                    "question": "Simplify: $(4x^3-2x^2+5x-1)+(x^3+3x^2-4x+6)$.",
                    "options": ["$5x^3+x^2+x+5$", "$5x^3+x^2+x-7$", "$3x^3+x^2+x+5$", "$5x^3-5x^2+x+5$"],
                    "correctAnswer": 0,
                    "solution": "Add like terms: $(4x^3+x^3)=5x^3$, $(-2x^2+3x^2)=x^2$, $(5x-4x)=x$, $(-1+6)=5$. So $5x^3+x^2+x+5$."
                },
                {
                    "id": 4,
                    "question": "Simplify: $(3x^2-7x+4)-(x^2+2x-9)$.",
                    "options": ["$2x^2-9x+13$", "$2x^2-5x-5$", "$4x^2-9x-5$", "$2x^2-9x-13$"],
                    "correctAnswer": 0,
                    "solution": "Distribute the minus: $3x^2-7x+4-x^2-2x+9 = 2x^2-9x+13$."
                },
                {
                    "id": 5,
                    "question": "Expand and simplify: $-2x(3x^2- x + 4)$.",
                    "options": ["$-6x^3+2x^2-8x$", "$-6x^3-2x^2-8x$", "$6x^3-2x^2+8x$", "$-6x^3+2x^2+8x$"],
                    "correctAnswer": 0,
                    "solution": "Distribute $-2x$: $-2x\\cdot 3x^2=-6x^3$, $-2x\\cdot(-x)=+2x^2$, $-2x\\cdot 4=-8x$."
                },
                {
                    "id": 6,
                    "question": "Expand: $(x-5)(x+3)$.",
                    "options": ["$x^2-2x-15$", "$x^2+8x-15$", "$x^2-8x-15$", "$x^2-2x+15$"],
                    "correctAnswer": 0,
                    "solution": "FOIL: $x^2+3x-5x-15 = x^2-2x-15$."
                },
                {
                    "id": 7,
                    "question": "Which statement about the **end behavior** of $P(x)= -x^5 + 2x^3 - 7$ is TRUE?",
                    "options": ["As $x\\to\\infty$, $P(x)\\to -\\infty$ and as $x\\to-\\infty$, $P(x)\\to \\infty$", "As $x\\to\\infty$, $P(x)\\to \\infty$ and as $x\\to-\\infty$, $P(x)\\to \\infty$", "As $x\\to\\infty$, $P(x)\\to -\\infty$ and as $x\\to-\\infty$, $P(x)\\to -\\infty$", "As $x\\to\\infty$, $P(x)\\to \\infty$ and as $x\\to-\\infty$, $P(x)\\to -\\infty$"],
                    "correctAnswer": 0,
                    "solution": "End behavior is controlled by the leading term $-x^5$ (odd degree, negative coefficient). For large positive $x$, $-x^5$ is very negative. For large negative $x$, $x^5$ is negative, so $-x^5$ is very positive."
                },
                {
                    "id": 8,
                    "question": "A polynomial has degree 4. What is the **maximum** possible number of turning points?",
                    "options": ["2", "3", "4", "5"],
                    "correctAnswer": 1,
                    "solution": "A degree $n$ polynomial can have at most $n-1$ turning points. For $n=4$, the maximum is 3."
                },
                {
                    "id": 9,
                    "question": "If $P(x)=(x-2)(x+1)(x-4)$, which value is definitely a **zero** of $P(x)$?",
                    "options": ["$-2$", "$-1$", "$1$", "$3$"],
                    "correctAnswer": 1,
                    "solution": "A zero happens when any factor equals 0. From $(x+1)$, we get $x=-1$."
                },
                {
                    "id": 10,
                    "question": "Given $P(x)=(x-3)^2(x+2)$, which statement is TRUE?",
                    "options": ["$x=3$ is a zero, and it is repeated (multiplicity 2)", "$x=-2$ is a zero with multiplicity 2", "The only zero is $x=3$", "The polynomial has degree 2"],
                    "correctAnswer": 0,
                    "solution": "$(x-3)^2$ means $x=3$ is a zero counted twice (multiplicity 2). $(x+2)$ gives another zero $x=-2$. Total degree is $2+1=3$."
                },
                {
                    "id": 11,
                    "question": "Which polynomial will have the **largest value** for very large positive $x$?",
                    "options": ["$A(x)=100x^2+1$", "$B(x)=x^3-10x$", "$C(x)= -2x^4+50$", "$D(x)=5x^3+7x^2$"],
                    "correctAnswer": 3,
                    "solution": "For very large positive $x$, the term with the highest degree and positive coefficient dominates the value. $D(x)$ behaves like $5x^3$, which is larger than $x^3$ and much larger than $100x^2$. $C(x)$ becomes very negative for large $x$."
                },
                {
                    "id": 12,
                    "question": "For $P(x)=7-3x+0x^2+5x^3$, what is the **coefficient of $x^2$** and the **constant term**?",
                    "options": ["coefficient of $x^2$ is 0; constant term is 7", "coefficient of $x^2$ is 5; constant term is 7", "coefficient of $x^2$ is $-3$; constant term is 0", "coefficient of $x^2$ is 0; constant term is $-3$"],
                    "correctAnswer": 0,
                    "solution": "The $x^2$ term is $0x^2$, so its coefficient is 0. The constant term is 7."
                },
                {
                    "id": 13,
                    "question": "Which polynomial matches the description: **cubic**, leading coefficient **positive**, and constant term **negative**?",
                    "options": ["$x^3-2x+5$", "$-x^3+4x^2-1$", "$2x^3+x^2-7$", "$x^2-3x-4$"],
                    "correctAnswer": 2,
                    "solution": "Cubic means degree 3. Positive leading coefficient means the $x^3$ coefficient is positive. Constant term negative means the last term is negative. Only $2x^3+x^2-7$ fits."
                },
                {
                    "id": 14,
                    "question": "Expand and simplify: $(x+2)(x-1)(x-3)$.",
                    "options": ["$x^3-2x^2-5x+6$", "$x^3+2x^2-5x-6$", "$x^3-2x^2+5x-6$", "$x^3+2x^2+5x+6$"],
                    "correctAnswer": 0,
                    "solution": "First $(x+2)(x-1)=x^2+x-2$. Then $(x^2+x-2)(x-3)=x^3-2x^2-5x+6$."
                },
                {
                    "id": 15,
                    "question": "A rectangle has length $(x+4)$ and width $(x-1)$. Write the area as a polynomial and then find the area when $x=5$.",
                    "options": ["Area $=x^2+3x-4$, and at $x=5$ the area is 36", "Area $=x^2+3x-4$, and at $x=5$ the area is 46", "Area $=x^2-3x-4$, and at $x=5$ the area is 36", "Area $=x^2+5x-4$, and at $x=5$ the area is 36"],
                    "correctAnswer": 0,
                    "solution": "Area $(x+4)(x-1)=x^2+3x-4$. Substitute $x=5$: $25+15-4=36$."
                }
            ]
        }
    }
};
