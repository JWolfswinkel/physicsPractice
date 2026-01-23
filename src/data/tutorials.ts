/**
 * Tutorial content for Physics Practice App
 * Each tutorial provides slide-based instruction for a topic
 */

import { Tutorial } from '@/lib/types';

export const tutorials: Record<string, Tutorial> = {
  'forces-newton': {
    topicId: 'forces-newton',
    title: {
      en: "Forces & Newton's Laws",
      nl: "Krachten & Newton's Wetten"
    },
    description: {
      en: "Learn about forces, how they affect motion, and Newton's three fundamental laws.",
      nl: "Leer over krachten, hoe ze beweging beïnvloeden, en de drie fundamentele wetten van Newton."
    },
    estimatedMinutes: 5,
    slides: [
      // Slide 1: Title
      {
        id: 'fn-intro',
        type: 'title',
        title: {
          en: "Forces & Newton's Laws",
          nl: "Krachten & Newton's Wetten"
        },
        content: {
          en: "Understanding how forces cause objects to move, accelerate, and interact.",
          nl: "Begrijpen hoe krachten ervoor zorgen dat objecten bewegen, versnellen en interageren."
        }
      },

      // Slide 2: What is a Force?
      {
        id: 'fn-what-is-force',
        type: 'concept',
        title: {
          en: "What is a Force?",
          nl: "Wat is een Kracht?"
        },
        content: {
          en: "A force is a push or pull that can change an object's motion. Forces are measured in Newtons (N).",
          nl: "Een kracht is een duw of trek die de beweging van een object kan veranderen. Krachten worden gemeten in Newton (N)."
        },
        bulletPoints: [
          {
            en: "Forces have both magnitude (size) and direction - they are vectors",
            nl: "Krachten hebben zowel grootte als richting - het zijn vectoren"
          },
          {
            en: "Multiple forces can act on an object at the same time",
            nl: "Meerdere krachten kunnen tegelijk op een object werken"
          },
          {
            en: "The net force is the sum of all forces acting on an object",
            nl: "De nettokracht is de som van alle krachten die op een object werken"
          },
          {
            en: "1 Newton ≈ the force needed to hold a small apple",
            nl: "1 Newton ≈ de kracht om een kleine appel vast te houden"
          }
        ],
        keyTerms: [
          {
            term: { en: "Force (F)", nl: "Kracht (F)" },
            definition: { en: "A push or pull measured in Newtons", nl: "Een duw of trek gemeten in Newton" }
          },
          {
            term: { en: "Net Force (Fnet)", nl: "Nettokracht (Fnet)" },
            definition: { en: "The total of all forces combined", nl: "Het totaal van alle krachten samen" }
          }
        ]
      },

      // Slide 3: Types of Forces
      {
        id: 'fn-types',
        type: 'concept',
        title: {
          en: "Common Types of Forces",
          nl: "Veelvoorkomende Soorten Krachten"
        },
        content: {
          en: "In physics problems, you'll encounter several common forces:",
          nl: "In natuurkunde opgaven kom je verschillende veelvoorkomende krachten tegen:"
        },
        bulletPoints: [
          {
            en: "Gravity (Fg): pulls objects toward Earth, Fg = m × g",
            nl: "Zwaartekracht (Fz): trekt objecten naar de aarde, Fz = m × g"
          },
          {
            en: "Normal force (Fn): pushes perpendicular to a surface",
            nl: "Normaalkracht (Fn): duwt loodrecht op een oppervlak"
          },
          {
            en: "Friction (Ff): opposes motion along a surface",
            nl: "Wrijvingskracht (Fw): werkt tegen beweging langs een oppervlak"
          },
          {
            en: "Tension (T): pulling force through a rope or string",
            nl: "Spankracht (Fspan): trekkracht door een touw of draad"
          },
          {
            en: "Applied force (Fa): any push or pull you apply",
            nl: "Aangrijpende kracht (Fa): elke duw of trek die je uitoefent"
          }
        ]
      },

      // Slide 4: Newton's First Law
      {
        id: 'fn-first-law',
        type: 'concept',
        title: {
          en: "Newton's First Law: Inertia",
          nl: "Newton's Eerste Wet: Traagheid"
        },
        content: {
          en: "An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net force.",
          nl: "Een object in rust blijft in rust, en een object in beweging blijft in beweging met constante snelheid, tenzij er een nettokracht op werkt."
        },
        bulletPoints: [
          {
            en: "This is also called the Law of Inertia",
            nl: "Dit wordt ook wel de Traagheidswet genoemd"
          },
          {
            en: "If Fnet = 0, velocity doesn't change (object stays still or moves at constant speed)",
            nl: "Als Fnet = 0, verandert de snelheid niet (object blijft stil of beweegt met constante snelheid)"
          },
          {
            en: "Example: A book on a table stays still because forces are balanced",
            nl: "Voorbeeld: Een boek op een tafel blijft stil omdat de krachten in evenwicht zijn"
          },
          {
            en: "Example: You feel pushed back when a car accelerates (your body wants to stay still)",
            nl: "Voorbeeld: Je voelt je naar achteren geduwd als een auto versnelt (je lichaam wil stil blijven)"
          }
        ]
      },

      // Slide 5: Newton's Second Law - The Formula
      {
        id: 'fn-second-law',
        type: 'formula',
        title: {
          en: "Newton's Second Law: F = m × a",
          nl: "Newton's Tweede Wet: F = m × a"
        },
        content: {
          en: "The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.",
          nl: "De versnelling van een object is recht evenredig met de nettokracht en omgekeerd evenredig met de massa."
        },
        formula: "F = m × a",
        formulaExplanation: {
          en: "F = Force in Newtons (N)\nm = mass in kilograms (kg)\na = acceleration in m/s²",
          nl: "F = Kracht in Newton (N)\nm = massa in kilogram (kg)\na = versnelling in m/s²"
        },
        bulletPoints: [
          {
            en: "More force → more acceleration",
            nl: "Meer kracht → meer versnelling"
          },
          {
            en: "More mass → less acceleration (for the same force)",
            nl: "Meer massa → minder versnelling (bij dezelfde kracht)"
          },
          {
            en: "Can be rearranged: a = F/m or m = F/a",
            nl: "Kan worden herschreven: a = F/m of m = F/a"
          }
        ]
      },

      // Slide 6: Newton's Second Law - Example
      {
        id: 'fn-second-example',
        type: 'example',
        title: {
          en: "Example: Calculating Acceleration",
          nl: "Voorbeeld: Versnelling Berekenen"
        },
        content: {
          en: "A shopping cart with mass 20 kg is pushed with a force of 40 N. What is its acceleration?",
          nl: "Een winkelwagen met massa 20 kg wordt geduwd met een kracht van 40 N. Wat is de versnelling?"
        },
        example: {
          problem: {
            en: "Given: m = 20 kg, F = 40 N\nFind: a = ?",
            nl: "Gegeven: m = 20 kg, F = 40 N\nGevraagd: a = ?"
          },
          solution: [
            {
              en: "Write down the formula: F = m × a",
              nl: "Schrijf de formule op: F = m × a"
            },
            {
              en: "Rearrange to find a: a = F / m",
              nl: "Herschrijf om a te vinden: a = F / m"
            },
            {
              en: "Substitute the values: a = 40 N / 20 kg",
              nl: "Vul de waarden in: a = 40 N / 20 kg"
            },
            {
              en: "Calculate: a = 2 m/s²",
              nl: "Bereken: a = 2 m/s²"
            }
          ]
        }
      },

      // Slide 7: Newton's Third Law
      {
        id: 'fn-third-law',
        type: 'concept',
        title: {
          en: "Newton's Third Law: Action-Reaction",
          nl: "Newton's Derde Wet: Actie-Reactie"
        },
        content: {
          en: "For every action, there is an equal and opposite reaction. When object A pushes on object B, object B pushes back on object A with equal force in the opposite direction.",
          nl: "Voor elke actie is er een gelijke en tegengestelde reactie. Als object A op object B duwt, duwt object B terug op object A met een gelijke kracht in tegengestelde richting."
        },
        bulletPoints: [
          {
            en: "Action and reaction forces are ALWAYS equal in magnitude",
            nl: "Actie- en reactiekrachten zijn ALTIJD gelijk in grootte"
          },
          {
            en: "They act on DIFFERENT objects (not the same object)",
            nl: "Ze werken op VERSCHILLENDE objecten (niet hetzelfde object)"
          },
          {
            en: "Example: You push against a wall → the wall pushes back on you",
            nl: "Voorbeeld: Je duwt tegen een muur → de muur duwt terug op jou"
          },
          {
            en: "Example: Rocket pushes exhaust down → exhaust pushes rocket up",
            nl: "Voorbeeld: Raket duwt uitlaatgas naar beneden → uitlaatgas duwt raket omhoog"
          }
        ]
      },

      // Slide 8: Gravity and Weight
      {
        id: 'fn-gravity',
        type: 'formula',
        title: {
          en: "Gravity and Weight",
          nl: "Zwaartekracht en Gewicht"
        },
        content: {
          en: "Weight is the force of gravity acting on an object. It depends on mass and gravitational acceleration.",
          nl: "Gewicht is de zwaartekracht die op een object werkt. Het hangt af van massa en valversnelling."
        },
        formula: "Fg = m × g",
        formulaExplanation: {
          en: "Fg = gravitational force (weight) in Newtons (N)\nm = mass in kilograms (kg)\ng = gravitational acceleration ≈ 9.8 m/s² (often rounded to 10 m/s²)",
          nl: "Fz = zwaartekracht (gewicht) in Newton (N)\nm = massa in kilogram (kg)\ng = valversnelling ≈ 9,8 m/s² (vaak afgerond naar 10 m/s²)"
        },
        bulletPoints: [
          {
            en: "Mass stays the same everywhere; weight changes with gravity",
            nl: "Massa blijft overal hetzelfde; gewicht verandert met zwaartekracht"
          },
          {
            en: "On Earth: a 1 kg object weighs about 10 N",
            nl: "Op aarde: een object van 1 kg weegt ongeveer 10 N"
          },
          {
            en: "On the Moon: the same object would weigh only ~1.6 N",
            nl: "Op de maan: hetzelfde object zou slechts ~1,6 N wegen"
          }
        ]
      },

      // Slide 9: Free Body Diagrams
      {
        id: 'fn-fbd',
        type: 'concept',
        title: {
          en: "Free Body Diagrams",
          nl: "Krachtenschema's"
        },
        content: {
          en: "A free body diagram shows all forces acting on a single object. It helps you analyze and solve force problems.",
          nl: "Een krachtenschema toont alle krachten die op één object werken. Het helpt je bij het analyseren en oplossen van krachtproblemen."
        },
        bulletPoints: [
          {
            en: "Draw the object as a simple shape (usually a box or dot)",
            nl: "Teken het object als een eenvoudige vorm (meestal een blokje of punt)"
          },
          {
            en: "Draw arrows showing each force (length = magnitude, direction matters)",
            nl: "Teken pijlen voor elke kracht (lengte = grootte, richting is belangrijk)"
          },
          {
            en: "Label each force (Fg, Fn, Ff, etc.)",
            nl: "Label elke kracht (Fz, Fn, Fw, etc.)"
          },
          {
            en: "Forces going opposite directions can cancel out",
            nl: "Krachten in tegengestelde richting kunnen elkaar opheffen"
          }
        ]
      },

      // Slide 10: Summary
      {
        id: 'fn-summary',
        type: 'summary',
        title: {
          en: "Summary: Key Formulas",
          nl: "Samenvatting: Belangrijke Formules"
        },
        content: {
          en: "Remember these key concepts and formulas for forces and Newton's laws:",
          nl: "Onthoud deze belangrijke concepten en formules voor krachten en Newton's wetten:"
        },
        bulletPoints: [
          {
            en: "Newton's 1st Law: Objects keep their velocity unless a net force acts",
            nl: "Newton's 1e Wet: Objecten behouden hun snelheid tenzij een nettokracht werkt"
          },
          {
            en: "Newton's 2nd Law: F = m × a (or a = F/m)",
            nl: "Newton's 2e Wet: F = m × a (of a = F/m)"
          },
          {
            en: "Newton's 3rd Law: Every action has an equal and opposite reaction",
            nl: "Newton's 3e Wet: Elke actie heeft een gelijke en tegengestelde reactie"
          },
          {
            en: "Weight: Fg = m × g (where g ≈ 10 m/s²)",
            nl: "Gewicht: Fz = m × g (waarbij g ≈ 10 m/s²)"
          },
          {
            en: "Always draw a free body diagram to identify all forces!",
            nl: "Teken altijd een krachtenschema om alle krachten te identificeren!"
          }
        ]
      }
    ]
  },

  'energy-work': {
    topicId: 'energy-work',
    title: {
      en: "Energy & Work",
      nl: "Energie & Arbeid"
    },
    description: {
      en: "Learn about different forms of energy, how work transfers energy, and the law of conservation of energy.",
      nl: "Leer over verschillende vormen van energie, hoe arbeid energie overdraagt, en de wet van behoud van energie."
    },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'ew-intro',
        type: 'title',
        title: {
          en: "Energy & Work",
          nl: "Energie & Arbeid"
        },
        content: {
          en: "Understanding energy, work, and how they relate to motion and forces.",
          nl: "Begrijpen van energie, arbeid, en hoe ze zich verhouden tot beweging en krachten."
        }
      },
      {
        id: 'ew-what-is-energy',
        type: 'concept',
        title: {
          en: "What is Energy?",
          nl: "Wat is Energie?"
        },
        content: {
          en: "Energy is the ability to do work or cause change. It is measured in Joules (J).",
          nl: "Energie is het vermogen om arbeid te verrichten of verandering te veroorzaken. Het wordt gemeten in Joule (J)."
        },
        bulletPoints: [
          { en: "Energy cannot be created or destroyed, only transformed", nl: "Energie kan niet worden gecreëerd of vernietigd, alleen omgezet" },
          { en: "Energy can transfer from one object to another", nl: "Energie kan van het ene object naar het andere worden overgedragen" },
          { en: "1 Joule = 1 Newton × 1 meter", nl: "1 Joule = 1 Newton × 1 meter" },
          { en: "Common forms: kinetic, potential, thermal, chemical, electrical", nl: "Veelvoorkomende vormen: kinetisch, potentieel, thermisch, chemisch, elektrisch" }
        ]
      },
      {
        id: 'ew-kinetic',
        type: 'formula',
        title: {
          en: "Kinetic Energy",
          nl: "Kinetische Energie"
        },
        content: {
          en: "Kinetic energy is the energy an object has due to its motion.",
          nl: "Kinetische energie is de energie die een object heeft door zijn beweging."
        },
        formula: "Ek = ½ × m × v²",
        formulaExplanation: {
          en: "Ek = kinetic energy in Joules (J)\nm = mass in kilograms (kg)\nv = velocity in meters per second (m/s)",
          nl: "Ek = kinetische energie in Joule (J)\nm = massa in kilogram (kg)\nv = snelheid in meter per seconde (m/s)"
        },
        bulletPoints: [
          { en: "Faster objects have MORE kinetic energy (v is squared!)", nl: "Snellere objecten hebben MEER kinetische energie (v is gekwadrateerd!)" },
          { en: "Double the speed → 4× the kinetic energy", nl: "Dubbele snelheid → 4× de kinetische energie" },
          { en: "A stationary object (v = 0) has no kinetic energy", nl: "Een stilstaand object (v = 0) heeft geen kinetische energie" }
        ]
      },
      {
        id: 'ew-potential',
        type: 'formula',
        title: {
          en: "Gravitational Potential Energy",
          nl: "Zwaartekracht Potentiële Energie"
        },
        content: {
          en: "Potential energy is stored energy due to an object's position or height above the ground.",
          nl: "Potentiële energie is opgeslagen energie door de positie of hoogte van een object boven de grond."
        },
        formula: "Ep = m × g × h",
        formulaExplanation: {
          en: "Ep = potential energy in Joules (J)\nm = mass in kilograms (kg)\ng = gravitational acceleration ≈ 10 m/s²\nh = height in meters (m)",
          nl: "Ep = potentiële energie in Joule (J)\nm = massa in kilogram (kg)\ng = valversnelling ≈ 10 m/s²\nh = hoogte in meter (m)"
        },
        bulletPoints: [
          { en: "Higher position = more potential energy", nl: "Hogere positie = meer potentiële energie" },
          { en: "At ground level (h = 0), potential energy = 0", nl: "Op grondniveau (h = 0), potentiële energie = 0" },
          { en: "When an object falls, Ep converts to Ek", nl: "Wanneer een object valt, wordt Ep omgezet in Ek" }
        ]
      },
      {
        id: 'ew-work',
        type: 'formula',
        title: {
          en: "Work",
          nl: "Arbeid"
        },
        content: {
          en: "Work is done when a force moves an object over a distance. Work transfers energy.",
          nl: "Arbeid wordt verricht wanneer een kracht een object over een afstand verplaatst. Arbeid draagt energie over."
        },
        formula: "W = F × s",
        formulaExplanation: {
          en: "W = work in Joules (J)\nF = force in Newtons (N)\ns = distance in meters (m)",
          nl: "W = arbeid in Joule (J)\nF = kracht in Newton (N)\ns = afstand in meter (m)"
        },
        bulletPoints: [
          { en: "Force must be in the direction of motion", nl: "Kracht moet in de richting van de beweging zijn" },
          { en: "No movement = no work done (even if you push hard!)", nl: "Geen beweging = geen arbeid verricht (ook al duw je hard!)" },
          { en: "Work done = energy transferred", nl: "Verrichte arbeid = overgedragen energie" }
        ]
      },
      {
        id: 'ew-example',
        type: 'example',
        title: {
          en: "Example: Lifting a Box",
          nl: "Voorbeeld: Een Doos Optillen"
        },
        content: {
          en: "A 5 kg box is lifted 2 meters high. How much work is done? (g = 10 m/s²)",
          nl: "Een doos van 5 kg wordt 2 meter hoog getild. Hoeveel arbeid wordt verricht? (g = 10 m/s²)"
        },
        example: {
          problem: {
            en: "Given: m = 5 kg, h = 2 m, g = 10 m/s²\nFind: W = ?",
            nl: "Gegeven: m = 5 kg, h = 2 m, g = 10 m/s²\nGevraagd: W = ?"
          },
          solution: [
            { en: "First find the force needed: F = m × g = 5 × 10 = 50 N", nl: "Eerst de benodigde kracht vinden: F = m × g = 5 × 10 = 50 N" },
            { en: "Then calculate work: W = F × s = 50 × 2 = 100 J", nl: "Dan arbeid berekenen: W = F × s = 50 × 2 = 100 J" },
            { en: "Or directly: W = m × g × h = 5 × 10 × 2 = 100 J", nl: "Of direct: W = m × g × h = 5 × 10 × 2 = 100 J" },
            { en: "This equals the potential energy gained!", nl: "Dit is gelijk aan de verkregen potentiële energie!" }
          ]
        }
      },
      {
        id: 'ew-conservation',
        type: 'concept',
        title: {
          en: "Conservation of Energy",
          nl: "Behoud van Energie"
        },
        content: {
          en: "Energy cannot be created or destroyed. The total energy in a closed system stays constant.",
          nl: "Energie kan niet worden gecreëerd of vernietigd. De totale energie in een gesloten systeem blijft constant."
        },
        bulletPoints: [
          { en: "Total energy before = Total energy after", nl: "Totale energie voor = Totale energie na" },
          { en: "Falling object: Ep converts to Ek (Ep + Ek = constant)", nl: "Vallend object: Ep wordt omgezet in Ek (Ep + Ek = constant)" },
          { en: "At the top: maximum Ep, minimum Ek", nl: "Aan de top: maximale Ep, minimale Ek" },
          { en: "At the bottom: minimum Ep, maximum Ek", nl: "Aan de onderkant: minimale Ep, maximale Ek" }
        ]
      },
      {
        id: 'ew-summary',
        type: 'summary',
        title: {
          en: "Summary: Energy Formulas",
          nl: "Samenvatting: Energie Formules"
        },
        content: {
          en: "Key formulas for energy and work:",
          nl: "Belangrijke formules voor energie en arbeid:"
        },
        bulletPoints: [
          { en: "Kinetic Energy: Ek = ½ × m × v²", nl: "Kinetische Energie: Ek = ½ × m × v²" },
          { en: "Potential Energy: Ep = m × g × h", nl: "Potentiële Energie: Ep = m × g × h" },
          { en: "Work: W = F × s", nl: "Arbeid: W = F × s" },
          { en: "Conservation: Ek₁ + Ep₁ = Ek₂ + Ep₂", nl: "Behoud: Ek₁ + Ep₁ = Ek₂ + Ep₂" },
          { en: "Units: Energy and Work are both in Joules (J)", nl: "Eenheden: Energie en Arbeid zijn beide in Joule (J)" }
        ]
      }
    ]
  },

  'power': {
    topicId: 'power',
    title: {
      en: "Power",
      nl: "Vermogen"
    },
    description: {
      en: "Learn what power is, how to calculate it, and the relationship between power, energy, and time.",
      nl: "Leer wat vermogen is, hoe je het berekent, en de relatie tussen vermogen, energie en tijd."
    },
    estimatedMinutes: 4,
    slides: [
      {
        id: 'pw-intro',
        type: 'title',
        title: {
          en: "Power",
          nl: "Vermogen"
        },
        content: {
          en: "Understanding how fast energy is transferred or work is done.",
          nl: "Begrijpen hoe snel energie wordt overgedragen of arbeid wordt verricht."
        }
      },
      {
        id: 'pw-what-is-power',
        type: 'concept',
        title: {
          en: "What is Power?",
          nl: "Wat is Vermogen?"
        },
        content: {
          en: "Power is the rate at which energy is transferred or work is done. It tells us how FAST energy is used.",
          nl: "Vermogen is de snelheid waarmee energie wordt overgedragen of arbeid wordt verricht. Het vertelt ons hoe SNEL energie wordt gebruikt."
        },
        bulletPoints: [
          { en: "Power is measured in Watts (W)", nl: "Vermogen wordt gemeten in Watt (W)" },
          { en: "1 Watt = 1 Joule per second", nl: "1 Watt = 1 Joule per seconde" },
          { en: "1 kilowatt (kW) = 1000 Watts", nl: "1 kilowatt (kW) = 1000 Watt" },
          { en: "Higher power = same work done faster, or more work in same time", nl: "Hoger vermogen = zelfde werk sneller gedaan, of meer werk in dezelfde tijd" }
        ],
        keyTerms: [
          { term: { en: "Power (P)", nl: "Vermogen (P)" }, definition: { en: "Energy transferred per unit time", nl: "Energie overgedragen per tijdseenheid" } },
          { term: { en: "Watt (W)", nl: "Watt (W)" }, definition: { en: "1 W = 1 J/s", nl: "1 W = 1 J/s" } }
        ]
      },
      {
        id: 'pw-formula',
        type: 'formula',
        title: {
          en: "Power Formula",
          nl: "Vermogen Formule"
        },
        content: {
          en: "Power equals energy (or work) divided by time.",
          nl: "Vermogen is gelijk aan energie (of arbeid) gedeeld door tijd."
        },
        formula: "P = E / t",
        formulaExplanation: {
          en: "P = power in Watts (W)\nE = energy in Joules (J)\nt = time in seconds (s)\n\nAlso: P = W / t (work divided by time)",
          nl: "P = vermogen in Watt (W)\nE = energie in Joule (J)\nt = tijd in seconden (s)\n\nOok: P = W / t (arbeid gedeeld door tijd)"
        },
        bulletPoints: [
          { en: "Can be rearranged: E = P × t or t = E / P", nl: "Kan worden herschreven: E = P × t of t = E / P" },
          { en: "Same formula works with Work (W) instead of Energy", nl: "Dezelfde formule werkt met Arbeid (W) in plaats van Energie" }
        ]
      },
      {
        id: 'pw-example1',
        type: 'example',
        title: {
          en: "Example: Light Bulb",
          nl: "Voorbeeld: Gloeilamp"
        },
        content: {
          en: "A 60 W light bulb is on for 5 minutes. How much energy does it use?",
          nl: "Een lamp van 60 W brandt 5 minuten. Hoeveel energie verbruikt hij?"
        },
        example: {
          problem: {
            en: "Given: P = 60 W, t = 5 min = 300 s\nFind: E = ?",
            nl: "Gegeven: P = 60 W, t = 5 min = 300 s\nGevraagd: E = ?"
          },
          solution: [
            { en: "Convert time to seconds: 5 min = 5 × 60 = 300 s", nl: "Zet tijd om naar seconden: 5 min = 5 × 60 = 300 s" },
            { en: "Use formula: E = P × t", nl: "Gebruik formule: E = P × t" },
            { en: "E = 60 W × 300 s = 18,000 J", nl: "E = 60 W × 300 s = 18.000 J" },
            { en: "Or: E = 18 kJ", nl: "Of: E = 18 kJ" }
          ]
        }
      },
      {
        id: 'pw-example2',
        type: 'example',
        title: {
          en: "Example: Climbing Stairs",
          nl: "Voorbeeld: Trap Beklimmen"
        },
        content: {
          en: "A 70 kg person climbs 10 m of stairs in 20 seconds. What is their power output?",
          nl: "Een persoon van 70 kg beklimt 10 m trap in 20 seconden. Wat is het geleverde vermogen?"
        },
        example: {
          problem: {
            en: "Given: m = 70 kg, h = 10 m, t = 20 s, g = 10 m/s²\nFind: P = ?",
            nl: "Gegeven: m = 70 kg, h = 10 m, t = 20 s, g = 10 m/s²\nGevraagd: P = ?"
          },
          solution: [
            { en: "First find work done: W = m × g × h", nl: "Eerst verrichte arbeid vinden: W = m × g × h" },
            { en: "W = 70 × 10 × 10 = 7000 J", nl: "W = 70 × 10 × 10 = 7000 J" },
            { en: "Then calculate power: P = W / t", nl: "Dan vermogen berekenen: P = W / t" },
            { en: "P = 7000 J / 20 s = 350 W", nl: "P = 7000 J / 20 s = 350 W" }
          ]
        }
      },
      {
        id: 'pw-everyday',
        type: 'concept',
        title: {
          en: "Power in Everyday Life",
          nl: "Vermogen in het Dagelijks Leven"
        },
        content: {
          en: "Power ratings tell you how quickly devices use energy:",
          nl: "Vermogenswaarden vertellen je hoe snel apparaten energie gebruiken:"
        },
        bulletPoints: [
          { en: "Phone charger: ~5-20 W", nl: "Telefoonlader: ~5-20 W" },
          { en: "Light bulb: 10-100 W", nl: "Gloeilamp: 10-100 W" },
          { en: "Microwave: ~1000 W (1 kW)", nl: "Magnetron: ~1000 W (1 kW)" },
          { en: "Electric kettle: ~2000 W (2 kW)", nl: "Waterkoker: ~2000 W (2 kW)" },
          { en: "Car engine: ~50,000-150,000 W (50-150 kW)", nl: "Automotor: ~50.000-150.000 W (50-150 kW)" }
        ]
      },
      {
        id: 'pw-summary',
        type: 'summary',
        title: {
          en: "Summary: Power",
          nl: "Samenvatting: Vermogen"
        },
        content: {
          en: "Key points about power:",
          nl: "Belangrijke punten over vermogen:"
        },
        bulletPoints: [
          { en: "Power = Energy / Time: P = E / t", nl: "Vermogen = Energie / Tijd: P = E / t" },
          { en: "Power = Work / Time: P = W / t", nl: "Vermogen = Arbeid / Tijd: P = W / t" },
          { en: "Unit: Watt (W) = Joule/second", nl: "Eenheid: Watt (W) = Joule/seconde" },
          { en: "1 kW = 1000 W", nl: "1 kW = 1000 W" },
          { en: "Rearrange: E = P × t to find energy", nl: "Herschrijf: E = P × t om energie te vinden" }
        ]
      }
    ]
  },

  'motion-graphs': {
    topicId: 'motion-graphs',
    title: {
      en: "Motion Graphs",
      nl: "Bewegingsdiagrammen"
    },
    description: {
      en: "Learn to read and interpret position-time and velocity-time graphs.",
      nl: "Leer hoe je plaats-tijd en snelheid-tijd diagrammen leest en interpreteert."
    },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'mg-intro',
        type: 'title',
        title: {
          en: "Motion Graphs",
          nl: "Bewegingsdiagrammen"
        },
        content: {
          en: "Understanding motion through position-time and velocity-time graphs.",
          nl: "Beweging begrijpen door plaats-tijd en snelheid-tijd diagrammen."
        }
      },
      {
        id: 'mg-position-time',
        type: 'concept',
        title: {
          en: "Position-Time Graphs (x-t)",
          nl: "Plaats-Tijd Diagrammen (x-t)"
        },
        content: {
          en: "A position-time graph shows where an object is at each moment in time.",
          nl: "Een plaats-tijd diagram toont waar een object zich bevindt op elk moment in de tijd."
        },
        bulletPoints: [
          { en: "Horizontal axis = time (t)", nl: "Horizontale as = tijd (t)" },
          { en: "Vertical axis = position (x)", nl: "Verticale as = plaats (x)" },
          { en: "The slope (steepness) = velocity", nl: "De helling (steilheid) = snelheid" },
          { en: "Steeper slope = faster motion", nl: "Steilere helling = snellere beweging" }
        ]
      },
      {
        id: 'mg-pt-reading',
        type: 'concept',
        title: {
          en: "Reading Position-Time Graphs",
          nl: "Plaats-Tijd Diagrammen Lezen"
        },
        content: {
          en: "Different line shapes tell you different things about the motion:",
          nl: "Verschillende lijnvormen vertellen je verschillende dingen over de beweging:"
        },
        bulletPoints: [
          { en: "Horizontal line → object is stationary (not moving)", nl: "Horizontale lijn → object staat stil (beweegt niet)" },
          { en: "Straight diagonal line → constant velocity", nl: "Rechte schuine lijn → constante snelheid" },
          { en: "Upward slope → moving forward (positive direction)", nl: "Opwaartse helling → beweegt vooruit (positieve richting)" },
          { en: "Downward slope → moving backward (negative direction)", nl: "Neerwaartse helling → beweegt achteruit (negatieve richting)" },
          { en: "Curved line → changing velocity (acceleration)", nl: "Gebogen lijn → veranderende snelheid (versnelling)" }
        ]
      },
      {
        id: 'mg-velocity-formula',
        type: 'formula',
        title: {
          en: "Velocity from Position-Time",
          nl: "Snelheid uit Plaats-Tijd"
        },
        content: {
          en: "To find velocity from a position-time graph, calculate the slope.",
          nl: "Om snelheid te vinden uit een plaats-tijd diagram, bereken je de helling."
        },
        formula: "v = Δx / Δt",
        formulaExplanation: {
          en: "v = velocity in m/s\nΔx = change in position (x₂ - x₁) in m\nΔt = change in time (t₂ - t₁) in s\n\nSlope = rise / run = Δx / Δt",
          nl: "v = snelheid in m/s\nΔx = verandering in plaats (x₂ - x₁) in m\nΔt = verandering in tijd (t₂ - t₁) in s\n\nHelling = stijging / verloop = Δx / Δt"
        }
      },
      {
        id: 'mg-velocity-time',
        type: 'concept',
        title: {
          en: "Velocity-Time Graphs (v-t)",
          nl: "Snelheid-Tijd Diagrammen (v-t)"
        },
        content: {
          en: "A velocity-time graph shows how fast an object moves at each moment.",
          nl: "Een snelheid-tijd diagram toont hoe snel een object beweegt op elk moment."
        },
        bulletPoints: [
          { en: "Horizontal axis = time (t)", nl: "Horizontale as = tijd (t)" },
          { en: "Vertical axis = velocity (v)", nl: "Verticale as = snelheid (v)" },
          { en: "The slope = acceleration", nl: "De helling = versnelling" },
          { en: "The area under the curve = distance traveled", nl: "De oppervlakte onder de curve = afgelegde afstand" }
        ]
      },
      {
        id: 'mg-vt-reading',
        type: 'concept',
        title: {
          en: "Reading Velocity-Time Graphs",
          nl: "Snelheid-Tijd Diagrammen Lezen"
        },
        content: {
          en: "What different lines mean in a v-t graph:",
          nl: "Wat verschillende lijnen betekenen in een v-t diagram:"
        },
        bulletPoints: [
          { en: "Horizontal line → constant velocity (no acceleration)", nl: "Horizontale lijn → constante snelheid (geen versnelling)" },
          { en: "Line at v = 0 → object is stationary", nl: "Lijn op v = 0 → object staat stil" },
          { en: "Upward slope → speeding up (positive acceleration)", nl: "Opwaartse helling → versnellen (positieve versnelling)" },
          { en: "Downward slope → slowing down (negative acceleration)", nl: "Neerwaartse helling → vertragen (negatieve versnelling)" },
          { en: "Line below zero → moving in negative direction", nl: "Lijn onder nul → beweging in negatieve richting" }
        ]
      },
      {
        id: 'mg-acceleration',
        type: 'formula',
        title: {
          en: "Acceleration from Velocity-Time",
          nl: "Versnelling uit Snelheid-Tijd"
        },
        content: {
          en: "Find acceleration by calculating the slope of a velocity-time graph.",
          nl: "Vind versnelling door de helling van een snelheid-tijd diagram te berekenen."
        },
        formula: "a = Δv / Δt",
        formulaExplanation: {
          en: "a = acceleration in m/s²\nΔv = change in velocity (v₂ - v₁) in m/s\nΔt = change in time (t₂ - t₁) in s",
          nl: "a = versnelling in m/s²\nΔv = verandering in snelheid (v₂ - v₁) in m/s\nΔt = verandering in tijd (t₂ - t₁) in s"
        }
      },
      {
        id: 'mg-area',
        type: 'concept',
        title: {
          en: "Area Under v-t Graph = Distance",
          nl: "Oppervlakte Onder v-t Diagram = Afstand"
        },
        content: {
          en: "The area between the velocity line and the time axis equals the distance traveled.",
          nl: "De oppervlakte tussen de snelheidslijn en de tijdas is gelijk aan de afgelegde afstand."
        },
        bulletPoints: [
          { en: "Rectangle: Area = base × height = t × v", nl: "Rechthoek: Oppervlakte = basis × hoogte = t × v" },
          { en: "Triangle: Area = ½ × base × height = ½ × t × v", nl: "Driehoek: Oppervlakte = ½ × basis × hoogte = ½ × t × v" },
          { en: "For complex shapes, split into rectangles and triangles", nl: "Voor complexe vormen, splits in rechthoeken en driehoeken" },
          { en: "Area below the x-axis = movement in negative direction", nl: "Oppervlakte onder de x-as = beweging in negatieve richting" }
        ]
      },
      {
        id: 'mg-summary',
        type: 'summary',
        title: {
          en: "Summary: Motion Graphs",
          nl: "Samenvatting: Bewegingsdiagrammen"
        },
        content: {
          en: "Key points for reading motion graphs:",
          nl: "Belangrijke punten voor het lezen van bewegingsdiagrammen:"
        },
        bulletPoints: [
          { en: "Position-time: slope = velocity", nl: "Plaats-tijd: helling = snelheid" },
          { en: "Velocity-time: slope = acceleration", nl: "Snelheid-tijd: helling = versnelling" },
          { en: "Velocity-time: area = distance", nl: "Snelheid-tijd: oppervlakte = afstand" },
          { en: "Horizontal line = no change", nl: "Horizontale lijn = geen verandering" },
          { en: "Steeper slope = faster change", nl: "Steilere helling = snellere verandering" }
        ]
      }
    ]
  },

  'density-pressure': {
    topicId: 'density-pressure',
    title: {
      en: "Density & Pressure",
      nl: "Dichtheid & Druk"
    },
    description: {
      en: "Learn about density, pressure in fluids, and how they affect floating and sinking.",
      nl: "Leer over dichtheid, druk in vloeistoffen, en hoe ze drijven en zinken beïnvloeden."
    },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'dp-intro',
        type: 'title',
        title: {
          en: "Density & Pressure",
          nl: "Dichtheid & Druk"
        },
        content: {
          en: "Understanding how mass, volume, and force relate to density and pressure.",
          nl: "Begrijpen hoe massa, volume en kracht zich verhouden tot dichtheid en druk."
        }
      },
      {
        id: 'dp-density',
        type: 'formula',
        title: {
          en: "Density",
          nl: "Dichtheid"
        },
        content: {
          en: "Density tells you how much mass is packed into a given volume.",
          nl: "Dichtheid vertelt je hoeveel massa er in een bepaald volume zit."
        },
        formula: "ρ = m / V",
        formulaExplanation: {
          en: "ρ (rho) = density in kg/m³\nm = mass in kilograms (kg)\nV = volume in cubic meters (m³)\n\nAlso common: g/cm³ or g/mL",
          nl: "ρ (rho) = dichtheid in kg/m³\nm = massa in kilogram (kg)\nV = volume in kubieke meter (m³)\n\nOok gebruikelijk: g/cm³ of g/mL"
        },
        bulletPoints: [
          { en: "Higher density = more mass in same volume", nl: "Hogere dichtheid = meer massa in hetzelfde volume" },
          { en: "Water density: 1000 kg/m³ = 1 g/cm³", nl: "Dichtheid van water: 1000 kg/m³ = 1 g/cm³" },
          { en: "Can rearrange: m = ρ × V or V = m / ρ", nl: "Kan herschrijven: m = ρ × V of V = m / ρ" }
        ]
      },
      {
        id: 'dp-floating',
        type: 'concept',
        title: {
          en: "Floating and Sinking",
          nl: "Drijven en Zinken"
        },
        content: {
          en: "Whether an object floats or sinks depends on comparing densities.",
          nl: "Of een object drijft of zinkt hangt af van het vergelijken van dichtheden."
        },
        bulletPoints: [
          { en: "Object density < fluid density → floats", nl: "Dichtheid object < dichtheid vloeistof → drijft" },
          { en: "Object density > fluid density → sinks", nl: "Dichtheid object > dichtheid vloeistof → zinkt" },
          { en: "Object density = fluid density → hovers", nl: "Dichtheid object = dichtheid vloeistof → zweeft" },
          { en: "Wood floats on water (wood ≈ 600 kg/m³, water = 1000 kg/m³)", nl: "Hout drijft op water (hout ≈ 600 kg/m³, water = 1000 kg/m³)" },
          { en: "Iron sinks in water (iron ≈ 7800 kg/m³)", nl: "IJzer zinkt in water (ijzer ≈ 7800 kg/m³)" }
        ]
      },
      {
        id: 'dp-pressure',
        type: 'formula',
        title: {
          en: "Pressure",
          nl: "Druk"
        },
        content: {
          en: "Pressure is force spread over an area. It tells you how concentrated a force is.",
          nl: "Druk is kracht verdeeld over een oppervlak. Het vertelt je hoe geconcentreerd een kracht is."
        },
        formula: "p = F / A",
        formulaExplanation: {
          en: "p = pressure in Pascals (Pa) or N/m²\nF = force in Newtons (N)\nA = area in square meters (m²)\n\n1 Pa = 1 N/m²",
          nl: "p = druk in Pascal (Pa) of N/m²\nF = kracht in Newton (N)\nA = oppervlakte in vierkante meter (m²)\n\n1 Pa = 1 N/m²"
        },
        bulletPoints: [
          { en: "Same force, smaller area → higher pressure", nl: "Zelfde kracht, kleiner oppervlak → hogere druk" },
          { en: "That's why sharp knives cut better!", nl: "Daarom snijden scherpe messen beter!" },
          { en: "Atmospheric pressure ≈ 100,000 Pa = 100 kPa", nl: "Atmosferische druk ≈ 100.000 Pa = 100 kPa" }
        ]
      },
      {
        id: 'dp-fluid-pressure',
        type: 'formula',
        title: {
          en: "Pressure in Fluids",
          nl: "Druk in Vloeistoffen"
        },
        content: {
          en: "Pressure in a liquid increases with depth due to the weight of fluid above.",
          nl: "Druk in een vloeistof neemt toe met diepte door het gewicht van de vloeistof erboven."
        },
        formula: "p = ρ × g × h",
        formulaExplanation: {
          en: "p = pressure in Pascals (Pa)\nρ = fluid density in kg/m³\ng = gravitational acceleration ≈ 10 m/s²\nh = depth in meters (m)",
          nl: "p = druk in Pascal (Pa)\nρ = vloeistofdichtheid in kg/m³\ng = valversnelling ≈ 10 m/s²\nh = diepte in meter (m)"
        },
        bulletPoints: [
          { en: "Deeper = higher pressure", nl: "Dieper = hogere druk" },
          { en: "Pressure acts equally in all directions at same depth", nl: "Druk werkt gelijk in alle richtingen op dezelfde diepte" },
          { en: "This is why your ears pop when diving!", nl: "Daarom gaan je oren pijn doen bij het duiken!" }
        ]
      },
      {
        id: 'dp-example',
        type: 'example',
        title: {
          en: "Example: Water Pressure",
          nl: "Voorbeeld: Waterdruk"
        },
        content: {
          en: "What is the water pressure at 5 meters depth in a swimming pool?",
          nl: "Wat is de waterdruk op 5 meter diepte in een zwembad?"
        },
        example: {
          problem: {
            en: "Given: h = 5 m, ρ = 1000 kg/m³, g = 10 m/s²\nFind: p = ?",
            nl: "Gegeven: h = 5 m, ρ = 1000 kg/m³, g = 10 m/s²\nGevraagd: p = ?"
          },
          solution: [
            { en: "Use formula: p = ρ × g × h", nl: "Gebruik formule: p = ρ × g × h" },
            { en: "p = 1000 × 10 × 5", nl: "p = 1000 × 10 × 5" },
            { en: "p = 50,000 Pa = 50 kPa", nl: "p = 50.000 Pa = 50 kPa" },
            { en: "This is about half of atmospheric pressure!", nl: "Dit is ongeveer de helft van de atmosferische druk!" }
          ]
        }
      },
      {
        id: 'dp-summary',
        type: 'summary',
        title: {
          en: "Summary: Density & Pressure",
          nl: "Samenvatting: Dichtheid & Druk"
        },
        content: {
          en: "Key formulas for density and pressure:",
          nl: "Belangrijke formules voor dichtheid en druk:"
        },
        bulletPoints: [
          { en: "Density: ρ = m / V (kg/m³)", nl: "Dichtheid: ρ = m / V (kg/m³)" },
          { en: "Pressure: p = F / A (Pa or N/m²)", nl: "Druk: p = F / A (Pa of N/m²)" },
          { en: "Fluid pressure: p = ρ × g × h", nl: "Vloeistofdruk: p = ρ × g × h" },
          { en: "Object floats if ρ_object < ρ_fluid", nl: "Object drijft als ρ_object < ρ_vloeistof" },
          { en: "Water density = 1000 kg/m³ = 1 g/cm³", nl: "Dichtheid water = 1000 kg/m³ = 1 g/cm³" }
        ]
      }
    ]
  },

  'circuits': {
    topicId: 'circuits',
    title: {
      en: "Electric Circuits",
      nl: "Elektrische Schakelingen"
    },
    description: {
      en: "Learn about voltage, current, resistance, and how to analyze series and parallel circuits.",
      nl: "Leer over spanning, stroomsterkte, weerstand, en hoe je serie- en parallelschakelingen analyseert."
    },
    estimatedMinutes: 6,
    slides: [
      {
        id: 'ec-intro',
        type: 'title',
        title: {
          en: "Electric Circuits",
          nl: "Elektrische Schakelingen"
        },
        content: {
          en: "Understanding voltage, current, resistance, and circuit configurations.",
          nl: "Begrijpen van spanning, stroomsterkte, weerstand en schakelingsconfiguraties."
        }
      },
      {
        id: 'ec-basics',
        type: 'concept',
        title: {
          en: "Circuit Basics",
          nl: "Schakeling Basis"
        },
        content: {
          en: "Electric circuits allow current to flow in a closed loop. They need a power source and a complete path.",
          nl: "Elektrische schakelingen laten stroom vloeien in een gesloten lus. Ze hebben een stroombron en een volledig pad nodig."
        },
        bulletPoints: [
          { en: "Current (I): flow of electric charge, measured in Amperes (A)", nl: "Stroomsterkte (I): stroom van elektrische lading, gemeten in Ampère (A)" },
          { en: "Voltage (U): electrical 'push', measured in Volts (V)", nl: "Spanning (U): elektrische 'druk', gemeten in Volt (V)" },
          { en: "Resistance (R): opposition to current flow, measured in Ohms (Ω)", nl: "Weerstand (R): tegenstand tegen stroomstroom, gemeten in Ohm (Ω)" }
        ],
        keyTerms: [
          { term: { en: "Current (I)", nl: "Stroomsterkte (I)" }, definition: { en: "Flow of charge in Amperes", nl: "Stroom van lading in Ampère" } },
          { term: { en: "Voltage (U)", nl: "Spanning (U)" }, definition: { en: "Electrical potential in Volts", nl: "Elektrisch potentiaal in Volt" } },
          { term: { en: "Resistance (R)", nl: "Weerstand (R)" }, definition: { en: "Opposition to flow in Ohms", nl: "Tegenstand tegen stroom in Ohm" } }
        ]
      },
      {
        id: 'ec-ohm',
        type: 'formula',
        title: {
          en: "Ohm's Law",
          nl: "Wet van Ohm"
        },
        content: {
          en: "Ohm's Law relates voltage, current, and resistance in a circuit.",
          nl: "De wet van Ohm verbindt spanning, stroomsterkte en weerstand in een schakeling."
        },
        formula: "U = I × R",
        formulaExplanation: {
          en: "U = voltage in Volts (V)\nI = current in Amperes (A)\nR = resistance in Ohms (Ω)\n\nCan rearrange: I = U / R or R = U / I",
          nl: "U = spanning in Volt (V)\nI = stroomsterkte in Ampère (A)\nR = weerstand in Ohm (Ω)\n\nKan herschrijven: I = U / R of R = U / I"
        },
        bulletPoints: [
          { en: "Higher voltage → more current (for same resistance)", nl: "Hogere spanning → meer stroom (bij zelfde weerstand)" },
          { en: "Higher resistance → less current (for same voltage)", nl: "Hogere weerstand → minder stroom (bij zelfde spanning)" }
        ]
      },
      {
        id: 'ec-series',
        type: 'concept',
        title: {
          en: "Series Circuits",
          nl: "Serieschakelingen"
        },
        content: {
          en: "In a series circuit, components are connected one after another in a single path.",
          nl: "In een serieschakeling zijn componenten na elkaar verbonden in één pad."
        },
        bulletPoints: [
          { en: "Current is THE SAME through all components: I = I₁ = I₂ = I₃", nl: "Stroomsterkte is GELIJK door alle componenten: I = I₁ = I₂ = I₃" },
          { en: "Voltage is DIVIDED among components: U = U₁ + U₂ + U₃", nl: "Spanning wordt VERDEELD over componenten: U = U₁ + U₂ + U₃" },
          { en: "Total resistance ADDS UP: R_total = R₁ + R₂ + R₃", nl: "Totale weerstand TELT OP: R_totaal = R₁ + R₂ + R₃" },
          { en: "If one component breaks, the whole circuit stops", nl: "Als één component kapot gaat, stopt de hele schakeling" }
        ]
      },
      {
        id: 'ec-parallel',
        type: 'concept',
        title: {
          en: "Parallel Circuits",
          nl: "Parallelschakelingen"
        },
        content: {
          en: "In a parallel circuit, components are connected side by side, creating multiple paths.",
          nl: "In een parallelschakeling zijn componenten naast elkaar verbonden, wat meerdere paden creëert."
        },
        bulletPoints: [
          { en: "Voltage is THE SAME across all branches: U = U₁ = U₂ = U₃", nl: "Spanning is GELIJK over alle takken: U = U₁ = U₂ = U₃" },
          { en: "Current is DIVIDED among branches: I = I₁ + I₂ + I₃", nl: "Stroomsterkte wordt VERDEELD over takken: I = I₁ + I₂ + I₃" },
          { en: "Total resistance DECREASES: 1/R = 1/R₁ + 1/R₂ + 1/R₃", nl: "Totale weerstand NEEMT AF: 1/R = 1/R₁ + 1/R₂ + 1/R₃" },
          { en: "If one branch breaks, others still work", nl: "Als één tak kapot gaat, werken de anderen nog" }
        ]
      },
      {
        id: 'ec-example',
        type: 'example',
        title: {
          en: "Example: Series Circuit",
          nl: "Voorbeeld: Serieschakeling"
        },
        content: {
          en: "Two resistors (R₁ = 4Ω, R₂ = 6Ω) are connected in series to a 20V battery. Find the current.",
          nl: "Twee weerstanden (R₁ = 4Ω, R₂ = 6Ω) zijn in serie geschakeld aan een batterij van 20V. Vind de stroomsterkte."
        },
        example: {
          problem: {
            en: "Given: R₁ = 4Ω, R₂ = 6Ω, U = 20V\nFind: I = ?",
            nl: "Gegeven: R₁ = 4Ω, R₂ = 6Ω, U = 20V\nGevraagd: I = ?"
          },
          solution: [
            { en: "Find total resistance: R_total = R₁ + R₂ = 4 + 6 = 10Ω", nl: "Vind totale weerstand: R_totaal = R₁ + R₂ = 4 + 6 = 10Ω" },
            { en: "Use Ohm's Law: I = U / R", nl: "Gebruik wet van Ohm: I = U / R" },
            { en: "I = 20V / 10Ω = 2A", nl: "I = 20V / 10Ω = 2A" },
            { en: "This current flows through both resistors!", nl: "Deze stroom vloeit door beide weerstanden!" }
          ]
        }
      },
      {
        id: 'ec-power',
        type: 'formula',
        title: {
          en: "Electrical Power",
          nl: "Elektrisch Vermogen"
        },
        content: {
          en: "Electrical power is the rate at which electrical energy is converted.",
          nl: "Elektrisch vermogen is de snelheid waarmee elektrische energie wordt omgezet."
        },
        formula: "P = U × I",
        formulaExplanation: {
          en: "P = power in Watts (W)\nU = voltage in Volts (V)\nI = current in Amperes (A)\n\nAlso: P = I²R or P = U²/R",
          nl: "P = vermogen in Watt (W)\nU = spanning in Volt (V)\nI = stroomsterkte in Ampère (A)\n\nOok: P = I²R of P = U²/R"
        }
      },
      {
        id: 'ec-summary',
        type: 'summary',
        title: {
          en: "Summary: Circuits",
          nl: "Samenvatting: Schakelingen"
        },
        content: {
          en: "Key formulas and rules for electric circuits:",
          nl: "Belangrijke formules en regels voor elektrische schakelingen:"
        },
        bulletPoints: [
          { en: "Ohm's Law: U = I × R", nl: "Wet van Ohm: U = I × R" },
          { en: "Series: same I, add U, add R", nl: "Serie: zelfde I, tel U op, tel R op" },
          { en: "Parallel: same U, add I, 1/R = 1/R₁ + 1/R₂", nl: "Parallel: zelfde U, tel I op, 1/R = 1/R₁ + 1/R₂" },
          { en: "Power: P = U × I = I²R = U²/R", nl: "Vermogen: P = U × I = I²R = U²/R" },
          { en: "Units: V (volt), A (ampere), Ω (ohm), W (watt)", nl: "Eenheden: V (volt), A (ampère), Ω (ohm), W (watt)" }
        ]
      }
    ]
  }
};

export function getTutorial(topicId: string): Tutorial | undefined {
  return tutorials[topicId];
}

export function hasTutorial(topicId: string): boolean {
  return topicId in tutorials;
}
