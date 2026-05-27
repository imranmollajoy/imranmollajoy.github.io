#let header(title) = box(
  width: 100%,
  inset: 8pt,
  fill: color.hsl(79deg, 0%, 89.5%),

  align(horizon + center)[
    #text(title, size: 14pt, weight: "medium")
  ],
)
#let text-block(title, year, cgpa: "", org: "", address: "", details: "") = [
  #sym.diamond.filled #text(title, weight: "bold") #h(1fr) #year\
  #if org != "" [
    #text(org, style: "italic")
    #if cgpa != "" {
      [(#cgpa)]
    } #h(1fr)
  ]
  #if address != "" {
    address
  }

  #if details != "" {
    details
  }
  #v(6pt)

]
#set page(
  paper: "a4",
  margin: 2cm,
)
#set text(font: ("Noto Serif", "Kalpurush"), size: 10pt)
#set par(justify: true, spacing: 12pt, leading: 8pt)


#set align(center)
#text(26pt, [#upper("Md. Imran Molla")], weight: "regular")

Dumki, Patuakhali, Bangladesh\


#link("tel:+8801676405707")  #h(1fr) #underline(link("mailto:imranmollajoy@gmail.com"))

#line(length: 100%, stroke: 1mm)
#v(-3.5mm)
#line(length: 100%, stroke: 0.1mm)


#box(
  width: 90%,
  inset: 12pt,
  [
    Passionate Agriculture graduate with a strong foundation in IT and data analysis. Experienced in software tools, programming, and research applications in agri-tech and bioinformatics. Seeking opportunities to bridge agriculture and technology to drive data-driven agricultural solutions and sustainable development.
  ],
)

#set align(left)

#header("Education")

#text-block(
  "Patuakhali Science and Technology University",
  "Nov 2025 --- Present",
  org: "Master of Science in Agricultural Extension and Rural Development",
  address: "Patuakhali",
  // details: "Focused on crop science, soil management, and agricultural data systems. Conducted research on drip irrigation system with biochar as a nutrient medium.",
)

#text-block(
  "Patuakhali Science and Technology University",
  "Jan 2020 --- Oct 2025",
  cgpa: "CGPA 3.531",
  org: "Bachelor of Science in Agriculture",
  address: "Patuakhali",
  details: "Focused on crop science, soil management, and agricultural data systems. Conducted research on drip irrigation system with biochar as a nutrient medium.",
)
#text-block(
  "Govt. Janata College",
  "2017 --- 2019",
  cgpa: "GPA 5.00",
  org: "HSC",
  address: "Patuakhali",
)

#text-block(
  "Lebukhali Habibullah Secondary School",
  "2012--- 2017",
  cgpa: "GPA 5.00",
  org: "SSC",
  address: "Patuakhali",
)






#header("Skills")

#columns(
  3,
  gutter: 48pt,
  [
    Microsoft Office\
    Adobe Photoshop \
    Figma\
    #colbreak()
    Linux OS \
    JavaScript\
    Python  \
    #colbreak()
    Typst \
    LaTeX \
    R \
  ],
)


#header("Extracurricular Activities")

#text-block(
  "Head of Technical Coordinator",
  "Aug 2025 --- Present",
  org: "PSTU Bioinformatics Club",
  details: "Managed hardware and software infrastructure for events and member projects.",
)
#text-block(
  "Founder and Lead Developer",
  "Mar 2025 --- Present",
  org: "Doomkey Softwares",
  details: "Developed 2 mobile applications with over 300 downloads. Also developed various full stack websites for clients using Next.js and Supabase.",
)

#text-block(
  "Graphic Designer",
  "Dec 2024 --- Mar 2025",
  org: "AGF Falcons",
  details: "Designed posters, flyers, and social media graphics for the club's events and promotions.",
)


#pagebreak()

#header("Projects")

#text-block(
  "Ovidhan",
  "Ionic + Vue.js",
  address: "https://github.com/doomkey/ovidhan",
  org: "English to Bangla Dictionary App",
  details: "Developed a mobile application that provides English to Bangla translations with offline capabilities, utilizing a local database for quick access to over 10,000 words.",
)

#text-block(
  "Alumni Database",
  "Next.js, Supabase, Vercel ",
  address: "https://github.com/doomkey/satkhira-alumni",
  org: "Student Association of Satkhira, PSTU",
  details: "Built a full-stack web application to manage and connect alumni from Satkhira, featuring user authentication, data submission, dynamic sorting and moderation capabilities.",
)

#text-block(
  "Korbotaki",
  "Ionic + Vue.js, Pinia, Vue i18n",
  address: "https://github.com/doomkey/korbotaki",
  org: "Decision-making App",
  details: "Developed a decision-support application for Android that helps users make rational choices using a decision matrix model. Designed and implemented a dynamic workflow for creating, ranking, and scoring decision criteria and alternatives to generate logical recommendations.",
)



#header("Awards & Certifications")

#text-block(
  "Extension Field Trip",
  "Aug 2025",
  details: "Gained hands-on experience with upazila-level agricultural and rural development organizations, understanding operational structures and technology adoption processes",
)

#text-block(
  "National Science Olympiad",
  "2018",
  org: "Regional Level Winner",
)

#text-block(
  "National Programming Contest",
  "2016",
  org: "Regional Level Winner",
)

#header("References")

#sym.diamond.filled #text("Dr. Md. Kamrul Hasan", weight: "bold") #h(1fr) kamrulext\@pstu.ac.bd \
Professor, Department of Agricultural Extension and Rural Development #h(1fr) #link("tel:+8801891565856") \
Patuakhali Science and Technology University

