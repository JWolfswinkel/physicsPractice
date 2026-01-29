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
  },

  // =============================================
  // VWO-4 TUTORIALS
  // =============================================

  'kinematics-2d': {
    topicId: 'kinematics-2d',
    title: { en: 'Kinematics in 2D', nl: 'Kinematica in 2D' },
    description: { en: 'Learn to decompose vectors, analyse projectile motion and understand relative velocity.', nl: 'Leer vectoren ontbinden, projectielbeweging analyseren en relatieve snelheid begrijpen.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'k2d-title',
        type: 'title',
        title: { en: 'Kinematics in 2D', nl: 'Kinematica in 2D' },
        content: {
          en: 'In this tutorial you will learn to:\n• Decompose a velocity vector into x- and y-components using sine and cosine\n• Describe projectile motion (horizontal throw)\n• Combine velocities using relative velocity',
          nl: 'In deze tutorial leer je:\n• Een snelheidsvector ontbinden in x- en y-componenten met sinus en cosinus\n• De projectielbeweging (horizontale worp) beschrijven\n• Snelheden combineren met relatieve snelheid',
        },
      },
      {
        id: 'k2d-vector-decomposition',
        type: 'concept',
        title: { en: 'Vector Decomposition', nl: 'Vectorontbinding' },
        content: {
          en: 'A velocity vector can be split into two perpendicular components. If the angle \u03b1 is measured from the positive x-axis, the horizontal component uses cosine and the vertical component uses sine.',
          nl: 'Een snelheidsvector kan worden ontbonden in twee loodrechte componenten. Als de hoek \u03b1 wordt gemeten vanaf de positieve x-as, gebruikt de horizontale component de cosinus en de verticale component de sinus.',
        },
        bulletPoints: [
          { en: 'The x-component is vx = v \u00b7 cos(\u03b1)', nl: 'De x-component is vx = v \u00b7 cos(\u03b1)' },
          { en: 'The y-component is vy = v \u00b7 sin(\u03b1)', nl: 'De y-component is vy = v \u00b7 sin(\u03b1)' },
          { en: 'The original magnitude can be recovered: v = \u221a(vx\u00b2 + vy\u00b2)', nl: 'De oorspronkelijke grootte kan worden teruggevonden: v = \u221a(vx\u00b2 + vy\u00b2)' },
          { en: 'Common mistake: swapping sin and cos \u2014 always check which side is adjacent (cos) and which is opposite (sin)', nl: 'Veelgemaakte fout: sin en cos verwisselen \u2014 controleer altijd welke zijde aanliggend (cos) en welke overstaand (sin) is' },
        ],
        keyTerms: [
          {
            term: { en: 'Component', nl: 'Component' },
            definition: { en: 'The projection of a vector along one of the coordinate axes.', nl: 'De projectie van een vector op \u00e9\u00e9n van de co\u00f6rdinaatassen.' },
          },
        ],
      },
      {
        id: 'k2d-projectile',
        type: 'concept',
        title: { en: 'Projectile Motion (Horizontal Throw)', nl: 'Projectielbeweging (Horizontale Worp)' },
        content: {
          en: 'When an object is launched horizontally from a height, it has a constant horizontal velocity and an independently increasing vertical velocity due to gravity. The two motions are completely independent.',
          nl: 'Wanneer een voorwerp horizontaal wordt gelanceerd vanaf een hoogte, heeft het een constante horizontale snelheid en een onafhankelijk toenemende verticale snelheid door de zwaartekracht. De twee bewegingen zijn volledig onafhankelijk.',
        },
        bulletPoints: [
          { en: 'Horizontal: x = vx \u00b7 t (constant velocity, no acceleration)', nl: 'Horizontaal: x = vx \u00b7 t (constante snelheid, geen versnelling)' },
          { en: 'Vertical: y = \u00bd \u00b7 g \u00b7 t\u00b2 (free fall from rest)', nl: 'Verticaal: y = \u00bd \u00b7 g \u00b7 t\u00b2 (vrije val vanuit rust)' },
          { en: 'The time of flight depends only on the height, not on the horizontal speed', nl: 'De valtijd hangt alleen af van de hoogte, niet van de horizontale snelheid' },
        ],
      },
      {
        id: 'k2d-formula',
        type: 'formula',
        title: { en: 'Key Formulas for 2D Kinematics', nl: 'Belangrijke Formules voor 2D Kinematica' },
        content: {
          en: 'These formulas connect velocity components and projectile motion.',
          nl: 'Deze formules verbinden snelheidscomponenten en projectielbeweging.',
        },
        formula: 'vx = v\u00b7cos(\u03b1)   vy = v\u00b7sin(\u03b1)\nx = vx\u00b7t          y = \u00bd\u00b7g\u00b7t\u00b2',
        formulaExplanation: {
          en: 'v = magnitude of velocity (m/s), \u03b1 = angle with the horizontal (\u00b0), vx = horizontal component (m/s), vy = vertical component (m/s), x = horizontal displacement (m), y = vertical displacement (m), g = 9.81 m/s\u00b2, t = time (s).',
          nl: 'v = grootte van de snelheid (m/s), \u03b1 = hoek met de horizontaal (\u00b0), vx = horizontale component (m/s), vy = verticale component (m/s), x = horizontale verplaatsing (m), y = verticale verplaatsing (m), g = 9,81 m/s\u00b2, t = tijd (s).',
        },
      },
      {
        id: 'k2d-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: {
          en: 'Let\'s apply projectile motion formulas to a horizontal throw.',
          nl: 'Laten we de projectielbewegingsformules toepassen op een horizontale worp.',
        },
        example: {
          problem: {
            en: 'A ball is thrown horizontally at 8.0 m/s from a table 1.25 m high. How far from the base of the table does it land?',
            nl: 'Een bal wordt horizontaal met 8,0 m/s van een tafel van 1,25 m hoog geworpen. Hoe ver van de voet van de tafel komt de bal terecht?',
          },
          solution: [
            { en: 'Step 1: Find fall time from y = \u00bdgt\u00b2. t = \u221a(2y/g) = \u221a(2\u00d71.25/9.81) \u2248 0.505 s.', nl: 'Stap 1: Bepaal de valtijd uit y = \u00bdgt\u00b2. t = \u221a(2y/g) = \u221a(2\u00d71,25/9,81) \u2248 0,505 s.' },
            { en: 'Step 2: x = vx \u00b7 t = 8.0 \u00d7 0.505 \u2248 4.0 m.', nl: 'Stap 2: x = vx \u00b7 t = 8,0 \u00d7 0,505 \u2248 4,0 m.' },
          ],
        },
      },
      {
        id: 'k2d-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from 2D kinematics.', nl: 'Belangrijkste idee\u00ebn uit 2D kinematica.' },
        bulletPoints: [
          { en: 'Decompose vectors: vx = v\u00b7cos(\u03b1) and vy = v\u00b7sin(\u03b1)', nl: 'Ontbind vectoren: vx = v\u00b7cos(\u03b1) en vy = v\u00b7sin(\u03b1)' },
          { en: 'In projectile motion, horizontal and vertical movements are independent', nl: 'Bij projectielbeweging zijn horizontale en verticale beweging onafhankelijk' },
          { en: 'Fall time depends only on height: t = \u221a(2h/g)', nl: 'De valtijd hangt alleen af van de hoogte: t = \u221a(2h/g)' },
          { en: 'Relative velocity: v_AB = v_A \u2212 v_B (vector subtraction)', nl: 'Relatieve snelheid: v_AB = v_A \u2212 v_B (vectoraftrekking)' },
        ],
      },
    ],
  },

  'forces-dynamics': {
    topicId: 'forces-dynamics',
    title: { en: 'Forces & Dynamics', nl: 'Krachten & Dynamica' },
    description: { en: 'Learn about forces on inclined planes, friction and an introduction to circular motion.', nl: 'Leer over krachten op hellende vlakken, wrijving en een introductie tot cirkelbewegingskracht.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'fd-title',
        type: 'title',
        title: { en: 'Forces & Dynamics', nl: 'Krachten & Dynamica' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Decompose the gravitational force on an inclined plane\n\u2022 Calculate the friction force using F_f = \u03bc \u00b7 F_N\n\u2022 Determine the net force and acceleration on a slope\n\u2022 Understand the basic idea of centripetal force',
          nl: 'In deze tutorial leer je:\n\u2022 De zwaartekracht ontbinden op een hellend vlak\n\u2022 De wrijvingskracht berekenen met F_f = \u03bc \u00b7 F_N\n\u2022 De nettokracht en versnelling op een helling bepalen\n\u2022 Het basisidee van de middelpuntzoekende kracht begrijpen',
        },
      },
      {
        id: 'fd-inclined-plane',
        type: 'concept',
        title: { en: 'Forces on an Inclined Plane', nl: 'Krachten op een Hellend Vlak' },
        content: {
          en: 'When an object rests on a slope, the gravitational force (Fg = mg) can be decomposed into two components: one parallel to the surface pulling the object down the slope, and one perpendicular to the surface.',
          nl: 'Wanneer een voorwerp op een helling rust, kan de zwaartekracht (Fz = mg) worden ontbonden in twee componenten: \u00e9\u00e9n evenwijdig aan het oppervlak en \u00e9\u00e9n loodrecht op het oppervlak.',
        },
        bulletPoints: [
          { en: 'F_parallel = m\u00b7g\u00b7sin(\u03b1) \u2014 the component along the slope', nl: 'F_parallel = m\u00b7g\u00b7sin(\u03b1) \u2014 de component langs de helling' },
          { en: 'F_normal = m\u00b7g\u00b7cos(\u03b1) \u2014 the component perpendicular to the slope', nl: 'F_normaal = m\u00b7g\u00b7cos(\u03b1) \u2014 de component loodrecht op de helling' },
          { en: 'Common mistake: using cos for the parallel component and sin for the normal', nl: 'Veelgemaakte fout: cos gebruiken voor de parallelle component en sin voor de normaal' },
        ],
        keyTerms: [
          {
            term: { en: 'Normal force', nl: 'Normaalkracht' },
            definition: { en: 'The support force exerted by a surface, perpendicular to that surface.', nl: 'De steunkracht uitgeoefend door een oppervlak, loodrecht op dat oppervlak.' },
          },
        ],
      },
      {
        id: 'fd-friction',
        type: 'concept',
        title: { en: 'Friction Force', nl: 'Wrijvingskracht' },
        content: {
          en: 'Friction opposes the motion of an object along a surface. On a slope, the normal force is mg\u00b7cos(\u03b1), not simply mg.',
          nl: 'Wrijving werkt de beweging van een voorwerp langs een oppervlak tegen. Op een helling is de normaalkracht mg\u00b7cos(\u03b1), niet simpelweg mg.',
        },
        bulletPoints: [
          { en: 'F_f = \u03bc \u00b7 F_N where \u03bc is the coefficient of friction (dimensionless)', nl: 'F_w = \u03bc \u00b7 F_N waarbij \u03bc de wrijvingsco\u00ebffici\u00ebnt is (dimensieloos)' },
          { en: 'Static friction (\u03bc_s) keeps an object at rest; kinetic friction (\u03bc_k) acts during sliding', nl: 'Statische wrijving (\u03bc_s) houdt een voorwerp in rust; kinetische wrijving (\u03bc_k) werkt tijdens het glijden' },
          { en: 'Usually \u03bc_s > \u03bc_k \u2014 it takes more force to start moving than to keep moving', nl: 'Meestal \u03bc_s > \u03bc_k \u2014 er is meer kracht nodig om te gaan bewegen dan om te blijven bewegen' },
        ],
      },
      {
        id: 'fd-formula',
        type: 'formula',
        title: { en: 'Key Formulas for Dynamics', nl: 'Belangrijke Formules voor Dynamica' },
        content: { en: 'These formulas describe forces on slopes and friction.', nl: 'Deze formules beschrijven krachten op hellingen en wrijving.' },
        formula: 'F_\u2225 = m\u00b7g\u00b7sin(\u03b1)\nF_N = m\u00b7g\u00b7cos(\u03b1)\nF_f = \u03bc\u00b7F_N\nF_c = m\u00b7v\u00b2/r',
        formulaExplanation: {
          en: 'F_\u2225 = component along slope (N), F_N = normal force (N), m = mass (kg), g = 9.81 m/s\u00b2, \u03b1 = slope angle (\u00b0), F_f = friction force (N), \u03bc = coefficient of friction, F_c = centripetal force (N), v = speed (m/s), r = radius (m).',
          nl: 'F_\u2225 = component langs helling (N), F_N = normaalkracht (N), m = massa (kg), g = 9,81 m/s\u00b2, \u03b1 = hellinghoek (\u00b0), F_w = wrijvingskracht (N), \u03bc = wrijvingsco\u00ebffici\u00ebnt, F_c = middelpuntzoekende kracht (N), v = snelheid (m/s), r = straal (m).',
        },
      },
      {
        id: 'fd-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Calculate the acceleration of a block sliding down a slope with friction.', nl: 'Bereken de versnelling van een blok dat van een helling glijdt met wrijving.' },
        example: {
          problem: {
            en: 'A 5.0 kg block slides down a 30\u00b0 slope. The coefficient of kinetic friction is \u03bc_k = 0.20. What is the acceleration?',
            nl: 'Een blok van 5,0 kg glijdt van een helling van 30\u00b0. De kinetische wrijvingsco\u00ebffici\u00ebnt is \u03bc_k = 0,20. Wat is de versnelling?',
          },
          solution: [
            { en: 'Step 1: F_\u2225 = mg\u00b7sin(30\u00b0) = 5.0\u00d79.81\u00d70.50 = 24.5 N', nl: 'Stap 1: F_\u2225 = mg\u00b7sin(30\u00b0) = 5,0\u00d79,81\u00d70,50 = 24,5 N' },
            { en: 'Step 2: F_N = mg\u00b7cos(30\u00b0) = 5.0\u00d79.81\u00d70.866 = 42.5 N', nl: 'Stap 2: F_N = mg\u00b7cos(30\u00b0) = 5,0\u00d79,81\u00d70,866 = 42,5 N' },
            { en: 'Step 3: F_f = 0.20\u00d742.5 = 8.5 N', nl: 'Stap 3: F_w = 0,20\u00d742,5 = 8,5 N' },
            { en: 'Step 4: F_net = 24.5 \u2212 8.5 = 16.0 N', nl: 'Stap 4: F_net = 24,5 \u2212 8,5 = 16,0 N' },
            { en: 'Step 5: a = F_net/m = 16.0/5.0 = 3.2 m/s\u00b2', nl: 'Stap 5: a = F_net/m = 16,0/5,0 = 3,2 m/s\u00b2' },
          ],
        },
      },
      {
        id: 'fd-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from forces and dynamics.', nl: 'Belangrijkste idee\u00ebn uit krachten en dynamica.' },
        bulletPoints: [
          { en: 'On a slope: F_\u2225 = mg\u00b7sin(\u03b1) and F_N = mg\u00b7cos(\u03b1)', nl: 'Op een helling: F_\u2225 = mg\u00b7sin(\u03b1) en F_N = mg\u00b7cos(\u03b1)' },
          { en: 'Friction: F_f = \u03bc\u00b7F_N, always opposing motion', nl: 'Wrijving: F_w = \u03bc\u00b7F_N, altijd tegengesteld aan de beweging' },
          { en: 'Net force determines acceleration: a = F_net/m', nl: 'De nettokracht bepaalt de versnelling: a = F_net/m' },
          { en: 'Circular motion requires centripetal force F_c = mv\u00b2/r towards the centre', nl: 'Cirkelbeweging vereist middelpuntzoekende kracht F_c = mv\u00b2/r naar het middelpunt' },
        ],
      },
    ],
  },

  'work-energy-power': {
    topicId: 'work-energy-power',
    title: { en: 'Work, Energy & Power', nl: 'Arbeid, Energie & Vermogen' },
    description: { en: 'Learn about work done by forces, energy conversions, efficiency and power.', nl: 'Leer over arbeid verricht door krachten, energieomzettingen, rendement en vermogen.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'wep-title',
        type: 'title',
        title: { en: 'Work, Energy & Power', nl: 'Arbeid, Energie & Vermogen' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Calculate work done by a force at an angle\n\u2022 Use kinetic and potential energy formulas\n\u2022 Apply conservation of energy with losses\n\u2022 Calculate efficiency and power',
          nl: 'In deze tutorial leer je:\n\u2022 Arbeid berekenen van een kracht onder een hoek\n\u2022 Formules voor kinetische en potenti\u00eble energie gebruiken\n\u2022 Behoud van energie toepassen met verliezen\n\u2022 Rendement en vermogen berekenen',
        },
      },
      {
        id: 'wep-work',
        type: 'concept',
        title: { en: 'Work Done by a Force', nl: 'Arbeid Verricht door een Kracht' },
        content: {
          en: 'Work is the transfer of energy when a force moves an object. Only the component of force in the direction of displacement does work. If the force is perpendicular, no work is done.',
          nl: 'Arbeid is de overdracht van energie wanneer een kracht een voorwerp verplaatst. Alleen de component van de kracht in de richting van de verplaatsing verricht arbeid.',
        },
        bulletPoints: [
          { en: 'W = F\u00b7s\u00b7cos(\u03b8), where \u03b8 is the angle between force and displacement', nl: 'W = F\u00b7s\u00b7cos(\u03b8), waarbij \u03b8 de hoek is tussen kracht en verplaatsing' },
          { en: 'Work is measured in joules (J): 1 J = 1 N\u00b7m', nl: 'Arbeid wordt gemeten in joule (J): 1 J = 1 N\u00b7m' },
          { en: 'Work can be negative \u2014 friction does negative work, removing kinetic energy', nl: 'Arbeid kan negatief zijn \u2014 wrijving verricht negatieve arbeid' },
        ],
      },
      {
        id: 'wep-energy',
        type: 'concept',
        title: { en: 'Kinetic & Potential Energy', nl: 'Kinetische & Potenti\u00eble Energie' },
        content: {
          en: 'Kinetic energy is energy of motion; potential energy is energy of position. These are the two main forms of mechanical energy.',
          nl: 'Kinetische energie is bewegingsenergie; potenti\u00eble energie is energie van positie. Dit zijn de twee belangrijkste vormen van mechanische energie.',
        },
        bulletPoints: [
          { en: 'Ek = \u00bd\u00b7m\u00b7v\u00b2', nl: 'Ek = \u00bd\u00b7m\u00b7v\u00b2' },
          { en: 'Ep = m\u00b7g\u00b7h', nl: 'Ep = m\u00b7g\u00b7h' },
          { en: 'Doubling speed quadruples kinetic energy', nl: 'Verdubbeling van snelheid verviervoudigt kinetische energie' },
        ],
      },
      {
        id: 'wep-efficiency',
        type: 'concept',
        title: { en: 'Conservation of Energy & Efficiency', nl: 'Behoud van Energie & Rendement' },
        content: {
          en: 'In a closed system total energy is conserved. In practice some energy is lost to friction. Efficiency tells you the fraction usefully converted.',
          nl: 'In een gesloten systeem is de totale energie behouden. In de praktijk gaat energie verloren aan wrijving. Rendement geeft aan welk deel nuttig wordt omgezet.',
        },
        bulletPoints: [
          { en: 'Without losses: Ek\u2081 + Ep\u2081 = Ek\u2082 + Ep\u2082', nl: 'Zonder verliezen: Ek\u2081 + Ep\u2081 = Ek\u2082 + Ep\u2082' },
          { en: 'With losses: Ek\u2081 + Ep\u2081 = Ek\u2082 + Ep\u2082 + E_lost', nl: 'Met verliezen: Ek\u2081 + Ep\u2081 = Ek\u2082 + Ep\u2082 + E_verloren' },
          { en: 'Efficiency: \u03b7 = (useful output / total input) \u00d7 100%', nl: 'Rendement: \u03b7 = (nuttige opbrengst / totale invoer) \u00d7 100%' },
        ],
      },
      {
        id: 'wep-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Formulas for work, energy and power.', nl: 'Formules voor arbeid, energie en vermogen.' },
        formula: 'W = F\u00b7s\u00b7cos(\u03b8)\nEk = \u00bd\u00b7m\u00b7v\u00b2\nEp = m\u00b7g\u00b7h\n\u03b7 = (E_useful / E_total) \u00d7 100%\nP = W/t = F\u00b7v',
        formulaExplanation: {
          en: 'W = work (J), F = force (N), s = displacement (m), \u03b8 = angle (\u00b0), Ek = kinetic energy (J), m = mass (kg), v = speed (m/s), Ep = potential energy (J), g = 9.81 m/s\u00b2, h = height (m), \u03b7 = efficiency (%), P = power (W), t = time (s).',
          nl: 'W = arbeid (J), F = kracht (N), s = verplaatsing (m), \u03b8 = hoek (\u00b0), Ek = kinetische energie (J), m = massa (kg), v = snelheid (m/s), Ep = potenti\u00eble energie (J), g = 9,81 m/s\u00b2, h = hoogte (m), \u03b7 = rendement (%), P = vermogen (W), t = tijd (s).',
        },
      },
      {
        id: 'wep-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Use conservation of energy to find speed at the bottom of a slide.', nl: 'Gebruik behoud van energie om de snelheid onderaan een glijbaan te vinden.' },
        example: {
          problem: {
            en: 'A 35 kg child slides down a frictionless 3.0 m high slide. What is the speed at the bottom?',
            nl: 'Een kind van 35 kg glijdt van een wrijvingsloze glijbaan van 3,0 m hoog. Wat is de snelheid onderaan?',
          },
          solution: [
            { en: 'Step 1: Ep = mgh = 35\u00d79.81\u00d73.0 = 1030 J', nl: 'Stap 1: Ep = mgh = 35\u00d79,81\u00d73,0 = 1030 J' },
            { en: 'Step 2: Ek = \u00bdmv\u00b2 = 1030 J \u2192 v\u00b2 = 2\u00d71030/35 = 58.9', nl: 'Stap 2: Ek = \u00bdmv\u00b2 = 1030 J \u2192 v\u00b2 = 2\u00d71030/35 = 58,9' },
            { en: 'Step 3: v = \u221a58.9 \u2248 7.7 m/s', nl: 'Stap 3: v = \u221a58,9 \u2248 7,7 m/s' },
          ],
        },
      },
      {
        id: 'wep-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from work, energy and power.', nl: 'Belangrijkste idee\u00ebn uit arbeid, energie en vermogen.' },
        bulletPoints: [
          { en: 'Work: W = F\u00b7s\u00b7cos(\u03b8)', nl: 'Arbeid: W = F\u00b7s\u00b7cos(\u03b8)' },
          { en: 'Mechanical energy = Ek + Ep; conserved without friction', nl: 'Mechanische energie = Ek + Ep; behouden zonder wrijving' },
          { en: 'Efficiency \u03b7 is always between 0% and 100%', nl: 'Rendement \u03b7 ligt altijd tussen 0% en 100%' },
          { en: 'Power P = W/t or P = F\u00b7v, measured in watts (W)', nl: 'Vermogen P = W/t of P = F\u00b7v, gemeten in watt (W)' },
        ],
      },
    ],
  },

  'momentum-impulse': {
    topicId: 'momentum-impulse',
    title: { en: 'Momentum & Impulse', nl: 'Impuls & Stoot' },
    description: { en: 'Learn about momentum, impulse, conservation of momentum and collisions.', nl: 'Leer over impuls, stoot, behoud van impuls en botsingen.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'mi-title',
        type: 'title',
        title: { en: 'Momentum & Impulse', nl: 'Impuls & Stoot' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Calculate momentum as a vector quantity\n\u2022 Relate impulse to change in momentum\n\u2022 Apply conservation of momentum\n\u2022 Distinguish elastic from inelastic collisions',
          nl: 'In deze tutorial leer je:\n\u2022 Impuls berekenen als vectorgrootheid\n\u2022 Stoot relateren aan impulsverandering\n\u2022 Behoud van impuls toepassen\n\u2022 Elastische van inelastische botsingen onderscheiden',
        },
      },
      {
        id: 'mi-momentum',
        type: 'concept',
        title: { en: 'Momentum', nl: 'Impuls' },
        content: {
          en: 'Momentum measures how difficult it is to stop a moving object. It is a vector: its direction equals the velocity direction.',
          nl: 'Impuls meet hoe moeilijk het is om een bewegend voorwerp te stoppen. Het is een vector: de richting is gelijk aan de snelheidsrichting.',
        },
        bulletPoints: [
          { en: 'p = m\u00b7v (kg\u00b7m/s)', nl: 'p = m\u00b7v (kg\u00b7m/s)' },
          { en: 'Momentum has a direction \u2014 always define a positive direction first', nl: 'Impuls heeft een richting \u2014 definieer altijd eerst een positieve richting' },
        ],
        keyTerms: [
          {
            term: { en: 'Momentum', nl: 'Impuls' },
            definition: { en: 'Product of mass and velocity: p = mv (kg\u00b7m/s). A vector quantity.', nl: 'Product van massa en snelheid: p = mv (kg\u00b7m/s). Een vectorgrootheid.' },
          },
        ],
      },
      {
        id: 'mi-impulse',
        type: 'concept',
        title: { en: 'Impulse', nl: 'Stoot' },
        content: {
          en: 'Impulse is the product of force and time interval. It equals the change in momentum.',
          nl: 'Stoot is het product van kracht en tijdsinterval. Het is gelijk aan de impulsverandering.',
        },
        bulletPoints: [
          { en: 'J = F\u00b7\u0394t = \u0394p = m\u00b7v_after \u2212 m\u00b7v_before', nl: 'J = F\u00b7\u0394t = \u0394p = m\u00b7v_na \u2212 m\u00b7v_voor' },
          { en: 'Longer contact time means smaller force for the same impulse \u2014 airbags use this principle', nl: 'Langere contacttijd betekent kleinere kracht bij dezelfde stoot \u2014 airbags gebruiken dit principe' },
        ],
      },
      {
        id: 'mi-collisions',
        type: 'concept',
        title: { en: 'Conservation & Collisions', nl: 'Behoud & Botsingen' },
        content: {
          en: 'In a closed system total momentum is conserved. In elastic collisions kinetic energy is also conserved. In inelastic collisions kinetic energy is partly lost. In a perfectly inelastic collision the objects stick together.',
          nl: 'In een gesloten systeem is de totale impuls behouden. Bij elastische botsingen is ook de kinetische energie behouden. Bij inelastische botsingen gaat kinetische energie deels verloren. Bij een volkomen inelastische botsing blijven de voorwerpen aan elkaar vast.',
        },
        bulletPoints: [
          { en: 'Conservation: m\u2081v\u2081 + m\u2082v\u2082 = m\u2081v\u2081\u2032 + m\u2082v\u2082\u2032', nl: 'Behoud: m\u2081v\u2081 + m\u2082v\u2082 = m\u2081v\u2081\u2032 + m\u2082v\u2082\u2032' },
          { en: 'Elastic: both momentum and kinetic energy are conserved', nl: 'Elastisch: zowel impuls als kinetische energie behouden' },
          { en: 'Perfectly inelastic: objects merge, maximum kinetic energy lost', nl: 'Volkomen inelastisch: voorwerpen kleven samen, maximaal kinetische energie verloren' },
        ],
      },
      {
        id: 'mi-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Formulas for momentum, impulse and collisions.', nl: 'Formules voor impuls, stoot en botsingen.' },
        formula: 'p = m\u00b7v\nJ = F\u00b7\u0394t = \u0394p\nm\u2081v\u2081 + m\u2082v\u2082 = m\u2081v\u2081\u2032 + m\u2082v\u2082\u2032',
        formulaExplanation: {
          en: 'p = momentum (kg\u00b7m/s), m = mass (kg), v = velocity (m/s), J = impulse (N\u00b7s), F = force (N), \u0394t = time interval (s). Primed velocities denote post-collision values.',
          nl: 'p = impuls (kg\u00b7m/s), m = massa (kg), v = snelheid (m/s), J = stoot (N\u00b7s), F = kracht (N), \u0394t = tijdsinterval (s). Geaccentueerde snelheden geven waarden na de botsing aan.',
        },
      },
      {
        id: 'mi-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Apply conservation of momentum to a perfectly inelastic collision.', nl: 'Pas behoud van impuls toe op een volkomen inelastische botsing.' },
        example: {
          problem: {
            en: 'A 1200 kg car at 15 m/s collides head-on with an 800 kg car at 10 m/s (opposite direction). They stick together. What is the velocity after the collision?',
            nl: 'Een auto van 1200 kg met 15 m/s botst frontaal op een auto van 800 kg met 10 m/s (tegengestelde richting). Ze blijven aan elkaar vast. Wat is de snelheid na de botsing?',
          },
          solution: [
            { en: 'Step 1: Let direction of 1200 kg car be positive.', nl: 'Stap 1: Laat de richting van de auto van 1200 kg positief zijn.' },
            { en: 'Step 2: p = 1200\u00d7(+15) + 800\u00d7(\u221210) = 18000 \u2212 8000 = 10000 kg\u00b7m/s', nl: 'Stap 2: p = 1200\u00d7(+15) + 800\u00d7(\u221210) = 18000 \u2212 8000 = 10000 kg\u00b7m/s' },
            { en: 'Step 3: 10000 = (1200+800)\u00d7v\u2032 \u2192 v\u2032 = 10000/2000 = 5.0 m/s', nl: 'Stap 3: 10000 = (1200+800)\u00d7v\u2032 \u2192 v\u2032 = 10000/2000 = 5,0 m/s' },
          ],
        },
      },
      {
        id: 'mi-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from momentum and impulse.', nl: 'Belangrijkste idee\u00ebn uit impuls en stoot.' },
        bulletPoints: [
          { en: 'p = mv is a vector \u2014 assign a positive direction', nl: 'p = mv is een vector \u2014 wijs een positieve richting toe' },
          { en: 'Impulse J = F\u0394t equals the change in momentum \u0394p', nl: 'Stoot J = F\u0394t is gelijk aan de impulsverandering \u0394p' },
          { en: 'Total momentum is conserved in closed systems', nl: 'De totale impuls is behouden in gesloten systemen' },
          { en: 'Elastic collisions conserve Ek; inelastic do not', nl: 'Elastische botsingen behouden Ek; inelastische niet' },
        ],
      },
    ],
  },

  'circular-motion': {
    topicId: 'circular-motion',
    title: { en: 'Circular Motion & Gravitation', nl: 'Cirkelbeweging & Gravitatie' },
    description: { en: 'Understand uniform circular motion, centripetal force and Newton\'s law of gravitation.', nl: 'Begrijp eenparige cirkelbeweging, middelpuntzoekende kracht en Newtons gravitatiewet.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'cm-title',
        type: 'title',
        title: { en: 'Circular Motion & Gravitation', nl: 'Cirkelbeweging & Gravitatie' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Describe uniform circular motion using period, frequency and velocity\n\u2022 Calculate centripetal acceleration and force\n\u2022 Apply Newton\'s law of gravitation\n\u2022 Explain how satellites stay in orbit',
          nl: 'In deze tutorial leer je:\n\u2022 Eenparige cirkelbeweging beschrijven met periode, frequentie en snelheid\n\u2022 Middelpuntzoekende versnelling en kracht berekenen\n\u2022 De gravitatiewet van Newton toepassen\n\u2022 Uitleggen hoe satellieten in een baan blijven',
        },
      },
      {
        id: 'cm-describing',
        type: 'concept',
        title: { en: 'Describing Circular Motion', nl: 'Cirkelbeweging Beschrijven' },
        content: {
          en: 'An object moving in a circle at constant speed has uniform circular motion. Speed is constant but velocity changes continuously because the direction changes.',
          nl: 'Een voorwerp dat met constante snelheid in een cirkel beweegt, maakt een eenparige cirkelbeweging. De snelheid is constant maar de richting verandert voortdurend.',
        },
        keyTerms: [
          { term: { en: 'Period (T)', nl: 'Periode (T)' }, definition: { en: 'Time for one revolution (s).', nl: 'Tijd voor \u00e9\u00e9n omwenteling (s).' } },
          { term: { en: 'Frequency (f)', nl: 'Frequentie (f)' }, definition: { en: 'Revolutions per second (Hz). f = 1/T.', nl: 'Omwentelingen per seconde (Hz). f = 1/T.' } },
        ],
        bulletPoints: [
          { en: 'Speed along the path: v = 2\u03c0r/T', nl: 'Baansnelheid: v = 2\u03c0r/T' },
        ],
      },
      {
        id: 'cm-centripetal',
        type: 'concept',
        title: { en: 'Centripetal Acceleration & Force', nl: 'Middelpuntzoekende Versnelling & Kracht' },
        content: {
          en: 'Because velocity direction changes continuously, there is an acceleration directed towards the centre. By Newton\'s second law this requires a net inward force: the centripetal force.',
          nl: 'Omdat de snelheidsrichting voortdurend verandert, is er een versnelling naar het middelpunt. Volgens de tweede wet van Newton is hiervoor een netto naar binnen gerichte kracht nodig: de middelpuntzoekende kracht.',
        },
        bulletPoints: [
          { en: 'Centripetal force is not a new force \u2014 it is provided by gravity, tension or friction', nl: 'Middelpuntzoekende kracht is geen nieuw type kracht \u2014 het wordt geleverd door zwaartekracht, spankracht of wrijving' },
          { en: 'Common mistake: there is no outward "centrifugal force" on the object', nl: 'Veelgemaakte fout: er is geen naar buiten gerichte "middelpuntvliedende kracht"' },
        ],
      },
      {
        id: 'cm-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Core equations for circular motion and gravitation.', nl: 'Kernformules voor cirkelbeweging en gravitatie.' },
        formula: 'a_c = v\u00b2/r\nF_c = mv\u00b2/r\nF = G\u00b7m\u2081\u00b7m\u2082/r\u00b2',
        formulaExplanation: {
          en: 'a_c = centripetal acceleration (m/s\u00b2), v = speed (m/s), r = radius (m), m = mass (kg), G = 6.67\u00d710\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2.',
          nl: 'a_c = middelpuntzoekende versnelling (m/s\u00b2), v = snelheid (m/s), r = straal (m), m = massa (kg), G = 6,67\u00d710\u207b\u00b9\u00b9 N\u00b7m\u00b2/kg\u00b2.',
        },
      },
      {
        id: 'cm-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Calculate centripetal force on a ball swung in a circle.', nl: 'Bereken de middelpuntzoekende kracht op een rondgezwaaide bal.' },
        example: {
          problem: {
            en: 'A 0.50 kg ball is swung in a horizontal circle of radius 1.2 m with period 0.80 s. Find the centripetal force.',
            nl: 'Een bal van 0,50 kg wordt rondgezwaaid in een horizontale cirkel met straal 1,2 m en periode 0,80 s. Bereken de middelpuntzoekende kracht.',
          },
          solution: [
            { en: 'Step 1: v = 2\u03c0r/T = 2\u03c0\u00d71.2/0.80 = 9.42 m/s', nl: 'Stap 1: v = 2\u03c0r/T = 2\u03c0\u00d71,2/0,80 = 9,42 m/s' },
            { en: 'Step 2: F_c = mv\u00b2/r = 0.50\u00d79.42\u00b2/1.2 = 0.50\u00d788.7/1.2 \u2248 37 N', nl: 'Stap 2: F_c = mv\u00b2/r = 0,50\u00d79,42\u00b2/1,2 = 0,50\u00d788,7/1,2 \u2248 37 N' },
          ],
        },
      },
      {
        id: 'cm-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from circular motion and gravitation.', nl: 'Belangrijkste idee\u00ebn uit cirkelbeweging en gravitatie.' },
        bulletPoints: [
          { en: 'v = 2\u03c0r/T gives orbital speed from radius and period', nl: 'v = 2\u03c0r/T geeft de baansnelheid uit straal en periode' },
          { en: 'Centripetal acceleration a_c = v\u00b2/r always points towards the centre', nl: 'Middelpuntzoekende versnelling a_c = v\u00b2/r wijst altijd naar het middelpunt' },
          { en: 'Gravity provides centripetal force for orbiting satellites', nl: 'Zwaartekracht levert de middelpuntzoekende kracht voor satellieten' },
          { en: 'Newton\'s gravitation: F = Gm\u2081m\u2082/r\u00b2', nl: 'Newtons gravitatie: F = Gm\u2081m\u2082/r\u00b2' },
        ],
      },
    ],
  },

  'harmonic-motion': {
    topicId: 'harmonic-motion',
    title: { en: 'Simple Harmonic Motion', nl: 'Eenvoudige Harmonische Beweging' },
    description: { en: 'Learn about oscillations, mass-spring systems, pendulums and energy in SHM.', nl: 'Leer over trillingen, massa-veersystemen, slingers en energie bij EHB.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'hm-title',
        type: 'title',
        title: { en: 'Simple Harmonic Motion', nl: 'Eenvoudige Harmonische Beweging' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Recognise simple harmonic motion (SHM)\n\u2022 Use period formulas for mass-spring and pendulum systems\n\u2022 Describe displacement with x = A\u00b7sin(\u03c9t)\n\u2022 Apply energy conservation in oscillating systems',
          nl: 'In deze tutorial leer je:\n\u2022 Eenvoudige harmonische beweging (EHB) herkennen\n\u2022 Periodeformules gebruiken voor massa-veer en slinger\n\u2022 Uitwijking beschrijven met x = A\u00b7sin(\u03c9t)\n\u2022 Energiebehoud toepassen bij trillende systemen',
        },
      },
      {
        id: 'hm-what-is',
        type: 'concept',
        title: { en: 'What is SHM?', nl: 'Wat is EHB?' },
        content: {
          en: 'Simple harmonic motion is a periodic oscillation where the restoring force is proportional to displacement. Maximum speed at equilibrium, zero speed at turning points.',
          nl: 'Eenvoudige harmonische beweging is een periodieke trilling waarbij de terugdrijvende kracht evenredig is met de uitwijking. Maximale snelheid bij evenwicht, snelheid nul bij de uitersten.',
        },
        keyTerms: [
          { term: { en: 'Amplitude (A)', nl: 'Amplitude (A)' }, definition: { en: 'Maximum displacement from equilibrium (m).', nl: 'Maximale uitwijking uit evenwichtsstand (m).' } },
          { term: { en: 'Period (T)', nl: 'Periode (T)' }, definition: { en: 'Time for one complete oscillation (s).', nl: 'Tijd voor \u00e9\u00e9n volledige trilling (s).' } },
          { term: { en: 'Frequency (f)', nl: 'Frequentie (f)' }, definition: { en: 'Oscillations per second (Hz). f = 1/T.', nl: 'Trillingen per seconde (Hz). f = 1/T.' } },
        ],
      },
      {
        id: 'hm-systems',
        type: 'concept',
        title: { en: 'Mass-Spring & Pendulum', nl: 'Massa-veer & Slinger' },
        content: {
          en: 'For a mass-spring system the period depends on mass and spring constant. For a pendulum it depends on length and g \u2014 not on mass.',
          nl: 'Bij een massa-veersysteem hangt de periode af van massa en veerconstante. Bij een slinger hangt het af van lengte en g \u2014 niet van massa.',
        },
        bulletPoints: [
          { en: 'Pendulum formula T = 2\u03c0\u221a(l/g) only valid for small angles (< 15\u00b0)', nl: 'Slingerformule T = 2\u03c0\u221a(l/g) geldt alleen voor kleine hoeken (< 15\u00b0)' },
          { en: 'Doubling mass on a spring increases period by factor \u221a2, not 2', nl: 'Massa verdubbelen aan een veer vergroot de periode met factor \u221a2, niet 2' },
        ],
      },
      {
        id: 'hm-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Core equations for SHM.', nl: 'Kernformules voor EHB.' },
        formula: 'T = 2\u03c0\u221a(m/k)\nT = 2\u03c0\u221a(l/g)\nf = 1/T\n\u03c9 = 2\u03c0f\nx = A\u00b7sin(\u03c9t)\nE = \u00bdkA\u00b2',
        formulaExplanation: {
          en: 'T = period (s), m = mass (kg), k = spring constant (N/m), l = pendulum length (m), g = 9.81 m/s\u00b2, f = frequency (Hz), \u03c9 = angular frequency (rad/s), x = displacement (m), A = amplitude (m), E = total energy (J).',
          nl: 'T = periode (s), m = massa (kg), k = veerconstante (N/m), l = slingerlengte (m), g = 9,81 m/s\u00b2, f = frequentie (Hz), \u03c9 = hoekfrequentie (rad/s), x = uitwijking (m), A = amplitude (m), E = totale energie (J).',
        },
      },
      {
        id: 'hm-energy',
        type: 'concept',
        title: { en: 'Energy in SHM', nl: 'Energie bij EHB' },
        content: {
          en: 'Total mechanical energy stays constant (no friction). Energy transforms between kinetic (\u00bdmv\u00b2) and potential (\u00bdkx\u00b2). At equilibrium all energy is kinetic; at extremes all is potential.',
          nl: 'Totale mechanische energie blijft constant (zonder wrijving). Energie wordt omgezet tussen kinetisch (\u00bdmv\u00b2) en potentieel (\u00bdkx\u00b2). Bij evenwicht is alles kinetisch; bij de uitersten is alles potentieel.',
        },
        bulletPoints: [
          { en: 'E_total = \u00bdkA\u00b2 = \u00bdmv\u00b2 + \u00bdkx\u00b2', nl: 'E_total = \u00bdkA\u00b2 = \u00bdmv\u00b2 + \u00bdkx\u00b2' },
          { en: 'When amplitude doubles, energy quadruples (E \u221d A\u00b2)', nl: 'Bij verdubbeling van amplitude verviervoudigt energie (E \u221d A\u00b2)' },
        ],
      },
      {
        id: 'hm-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Find the period and maximum speed of a mass-spring oscillator.', nl: 'Bepaal de periode en maximale snelheid van een massa-veer-oscillator.' },
        example: {
          problem: {
            en: 'A 0.40 kg mass on a spring (k = 160 N/m) oscillates with amplitude 0.050 m. Calculate the period and maximum speed.',
            nl: 'Een massa van 0,40 kg aan een veer (k = 160 N/m) trilt met amplitude 0,050 m. Bereken de periode en maximale snelheid.',
          },
          solution: [
            { en: 'Step 1: T = 2\u03c0\u221a(m/k) = 2\u03c0\u221a(0.40/160) = 2\u03c0\u00d70.050 = 0.314 s', nl: 'Stap 1: T = 2\u03c0\u221a(m/k) = 2\u03c0\u221a(0,40/160) = 2\u03c0\u00d70,050 = 0,314 s' },
            { en: 'Step 2: \u03c9 = 2\u03c0/T = 20.0 rad/s', nl: 'Stap 2: \u03c9 = 2\u03c0/T = 20,0 rad/s' },
            { en: 'Step 3: v_max = \u03c9A = 20.0\u00d70.050 = 1.0 m/s', nl: 'Stap 3: v_max = \u03c9A = 20,0\u00d70,050 = 1,0 m/s' },
          ],
        },
      },
      {
        id: 'hm-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from simple harmonic motion.', nl: 'Belangrijkste idee\u00ebn uit eenvoudige harmonische beweging.' },
        bulletPoints: [
          { en: 'Mass-spring: T = 2\u03c0\u221a(m/k)', nl: 'Massa-veer: T = 2\u03c0\u221a(m/k)' },
          { en: 'Pendulum: T = 2\u03c0\u221a(l/g) \u2014 independent of mass', nl: 'Slinger: T = 2\u03c0\u221a(l/g) \u2014 onafhankelijk van massa' },
          { en: 'Amplitude does not affect period', nl: 'Amplitude heeft geen invloed op de periode' },
          { en: 'Total energy E = \u00bdkA\u00b2 is proportional to A\u00b2', nl: 'Totale energie E = \u00bdkA\u00b2 is evenredig met A\u00b2' },
        ],
      },
    ],
  },

  'dc-circuits': {
    topicId: 'dc-circuits',
    title: { en: 'DC Circuits', nl: 'Gelijkstroomschakelingen' },
    description: { en: 'Master series and parallel resistors, Kirchhoff\'s laws, power and internal resistance.', nl: 'Beheers serie- en parallelweerstanden, Kirchhoffs wetten, vermogen en inwendige weerstand.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'dc-title',
        type: 'title',
        title: { en: 'DC Circuits', nl: 'Gelijkstroomschakelingen' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Calculate total resistance in series and parallel\n\u2022 Apply Kirchhoff\'s voltage and current laws\n\u2022 Calculate power dissipation\n\u2022 Understand internal resistance of batteries',
          nl: 'In deze tutorial leer je:\n\u2022 Totale weerstand berekenen in serie en parallel\n\u2022 Spannings- en stroomwet van Kirchhoff toepassen\n\u2022 Vermogensdissipatie berekenen\n\u2022 Inwendige weerstand van batterijen begrijpen',
        },
      },
      {
        id: 'dc-series-parallel',
        type: 'concept',
        title: { en: 'Series & Parallel Resistors', nl: 'Serie- & Parallelweerstanden' },
        content: {
          en: 'In series, the same current flows through every component and total resistance is the sum. In parallel, voltage across each branch is the same and total resistance uses the reciprocal formula.',
          nl: 'In serie loopt dezelfde stroom door elke component en is de totale weerstand de som. In parallel is de spanning over elke tak gelijk en wordt de totale weerstand met de omgekeerde formule bepaald.',
        },
        keyTerms: [
          { term: { en: 'Series', nl: 'Serie' }, definition: { en: 'Same current, voltages add up.', nl: 'Dezelfde stroom, spanningen tellen op.' } },
          { term: { en: 'Parallel', nl: 'Parallel' }, definition: { en: 'Same voltage, currents add up.', nl: 'Dezelfde spanning, stromen tellen op.' } },
        ],
        bulletPoints: [
          { en: 'Parallel total resistance is always less than the smallest individual resistor', nl: 'Parallelweerstand is altijd kleiner dan de kleinste afzonderlijke weerstand' },
        ],
      },
      {
        id: 'dc-kirchhoff',
        type: 'concept',
        title: { en: 'Kirchhoff\'s Laws', nl: 'Wetten van Kirchhoff' },
        content: {
          en: 'Voltage law (KVL): sum of voltages around any closed loop = 0. Current law (KCL): sum of currents at any junction = 0.',
          nl: 'Spanningswet (KVL): som van spanningen in een gesloten kring = 0. Stroomwet (KCL): som van stromen in een knooppunt = 0.',
        },
        bulletPoints: [
          { en: 'KVL follows from conservation of energy', nl: 'KVL volgt uit behoud van energie' },
          { en: 'KCL follows from conservation of charge', nl: 'KCL volgt uit behoud van lading' },
          { en: 'Common mistake: forgetting voltage signs \u2014 rise (source) is +, drop (resistor) is \u2212', nl: 'Veelgemaakte fout: spanningsstekens vergeten \u2014 stijging (bron) is +, daling (weerstand) is \u2212' },
        ],
      },
      {
        id: 'dc-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Essential equations for DC circuits.', nl: 'Essenti\u00eble formules voor gelijkstroomschakelingen.' },
        formula: 'V = IR\nR_series = R\u2081 + R\u2082 + ...\n1/R_parallel = 1/R\u2081 + 1/R\u2082 + ...\nP = VI = I\u00b2R = V\u00b2/R\nV_term = EMF \u2212 I\u00b7r',
        formulaExplanation: {
          en: 'V = potential difference (V), I = current (A), R = resistance (\u03a9), P = power (W), EMF = electromotive force (V), r = internal resistance (\u03a9), V_term = terminal voltage (V).',
          nl: 'V = potentiaalverschil (V), I = stroomsterkte (A), R = weerstand (\u03a9), P = vermogen (W), EMF = elektromotorische kracht (V), r = inwendige weerstand (\u03a9), V_term = klemspanning (V).',
        },
      },
      {
        id: 'dc-internal',
        type: 'concept',
        title: { en: 'Internal Resistance', nl: 'Inwendige Weerstand' },
        content: {
          en: 'A real battery has internal resistance (r). Terminal voltage is less than EMF when current flows: V_term = EMF \u2212 Ir. When I = 0, terminal voltage equals EMF.',
          nl: 'Een echte batterij heeft inwendige weerstand (r). De klemspanning is lager dan de EMF als er stroom loopt: V_klem = EMF \u2212 Ir. Als I = 0 is de klemspanning gelijk aan de EMF.',
        },
      },
      {
        id: 'dc-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Analyse a series circuit with internal resistance.', nl: 'Analyseer een serieschakeling met inwendige weerstand.' },
        example: {
          problem: {
            en: 'Battery: EMF = 12 V, r = 0.50 \u03a9. Two series resistors: R\u2081 = 4.0 \u03a9, R\u2082 = 6.0 \u03a9. Find current, terminal voltage, and power in each resistor.',
            nl: 'Batterij: EMF = 12 V, r = 0,50 \u03a9. Twee serieweerstanden: R\u2081 = 4,0 \u03a9, R\u2082 = 6,0 \u03a9. Bepaal stroomsterkte, klemspanning en vermogen per weerstand.',
          },
          solution: [
            { en: 'Step 1: R_total = 4.0 + 6.0 + 0.50 = 10.5 \u03a9', nl: 'Stap 1: R_totaal = 4,0 + 6,0 + 0,50 = 10,5 \u03a9' },
            { en: 'Step 2: I = EMF/R_total = 12/10.5 = 1.14 A', nl: 'Stap 2: I = EMF/R_totaal = 12/10,5 = 1,14 A' },
            { en: 'Step 3: V_term = 12 \u2212 1.14\u00d70.50 = 11.4 V', nl: 'Stap 3: V_klem = 12 \u2212 1,14\u00d70,50 = 11,4 V' },
            { en: 'Step 4: P\u2081 = I\u00b2R\u2081 = 1.14\u00b2\u00d74.0 = 5.2 W; P\u2082 = 1.14\u00b2\u00d76.0 = 7.8 W', nl: 'Stap 4: P\u2081 = I\u00b2R\u2081 = 1,14\u00b2\u00d74,0 = 5,2 W; P\u2082 = 1,14\u00b2\u00d76,0 = 7,8 W' },
          ],
        },
      },
      {
        id: 'dc-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from DC circuits.', nl: 'Belangrijkste idee\u00ebn uit gelijkstroomschakelingen.' },
        bulletPoints: [
          { en: 'Ohm\'s law: V = IR', nl: 'Wet van Ohm: V = IR' },
          { en: 'Series: R_total = R\u2081 + R\u2082 + ...', nl: 'Serie: R_totaal = R\u2081 + R\u2082 + ...' },
          { en: 'Parallel: 1/R_total = 1/R\u2081 + 1/R\u2082 + ...', nl: 'Parallel: 1/R_totaal = 1/R\u2081 + 1/R\u2082 + ...' },
          { en: 'Power: P = VI = I\u00b2R = V\u00b2/R', nl: 'Vermogen: P = VI = I\u00b2R = V\u00b2/R' },
          { en: 'Terminal voltage: V_term = EMF \u2212 I\u00b7r', nl: 'Klemspanning: V_klem = EMF \u2212 I\u00b7r' },
        ],
      },
    ],
  },

  'fields-basics': {
    topicId: 'fields-basics',
    title: { en: 'Electric Fields \u2014 Basics', nl: 'Elektrische Velden \u2014 Basis' },
    description: { en: 'Explore electric fields, field lines, potential difference and Coulomb\'s law.', nl: 'Verken elektrische velden, veldlijnen, potentiaalverschil en de wet van Coulomb.' },
    estimatedMinutes: 5,
    slides: [
      {
        id: 'fb-title',
        type: 'title',
        title: { en: 'Electric Fields \u2014 Basics', nl: 'Elektrische Velden \u2014 Basis' },
        content: {
          en: 'In this tutorial you will learn to:\n\u2022 Define the electric field and calculate its strength\n\u2022 Draw and interpret field line diagrams\n\u2022 Relate potential difference to work on a charge\n\u2022 Use Coulomb\'s law for forces between point charges',
          nl: 'In deze tutorial leer je:\n\u2022 Het elektrisch veld defini\u00ebren en de veldsterkte berekenen\n\u2022 Veldlijnen tekenen en interpreteren\n\u2022 Potentiaalverschil relateren aan arbeid op een lading\n\u2022 De wet van Coulomb gebruiken voor krachten tussen puntladingen',
        },
      },
      {
        id: 'fb-field-strength',
        type: 'concept',
        title: { en: 'Electric Field Strength', nl: 'Elektrische Veldsterkte' },
        content: {
          en: 'An electric field exists around any charge. Field strength E = F/q is the force per unit positive charge. The SI unit is N/C, equivalent to V/m.',
          nl: 'Een elektrisch veld bestaat rondom elke lading. Veldsterkte E = F/q is de kracht per eenheid positieve lading. De SI-eenheid is N/C, gelijk aan V/m.',
        },
        keyTerms: [
          { term: { en: 'E (field strength)', nl: 'E (veldsterkte)' }, definition: { en: 'Force per unit positive charge: E = F/q (N/C or V/m).', nl: 'Kracht per eenheid positieve lading: E = F/q (N/C of V/m).' } },
          { term: { en: 'Uniform field', nl: 'Homogeen veld' }, definition: { en: 'Same strength and direction everywhere, e.g. between parallel plates: E = V/d.', nl: 'Overal dezelfde sterkte en richting, bijv. tussen parallelle platen: E = V/d.' } },
        ],
      },
      {
        id: 'fb-field-lines',
        type: 'concept',
        title: { en: 'Field Lines & Potential Difference', nl: 'Veldlijnen & Potentiaalverschil' },
        content: {
          en: 'Field lines run from + to \u2212. Denser lines mean a stronger field. They never cross. Potential difference V = W/q is the work done per unit charge.',
          nl: 'Veldlijnen lopen van + naar \u2212. Dichter bij elkaar betekent sterker veld. Ze kruisen elkaar nooit. Potentiaalverschil V = W/q is de arbeid per eenheid lading.',
        },
        bulletPoints: [
          { en: 'Field lines show force direction on a positive charge', nl: 'Veldlijnen tonen de krachtsrichting op een positieve lading' },
          { en: 'A negative charge experiences force in the opposite direction', nl: 'Een negatieve lading ervaart een kracht in de tegengestelde richting' },
        ],
      },
      {
        id: 'fb-coulomb',
        type: 'concept',
        title: { en: 'Coulomb\'s Law', nl: 'Wet van Coulomb' },
        content: {
          en: 'Coulomb\'s law gives the force between two point charges: F = kq\u2081q\u2082/r\u00b2. Like charges repel; opposite charges attract. The force obeys Newton\'s third law.',
          nl: 'De wet van Coulomb geeft de kracht tussen twee puntladingen: F = kq\u2081q\u2082/r\u00b2. Gelijknamige ladingen stoten af; ongelijknamige trekken aan. De kracht gehoorzaamt aan de derde wet van Newton.',
        },
        bulletPoints: [
          { en: 'r is the distance between charge centres, not surfaces', nl: 'r is de afstand tussen de middelpunten van de ladingen, niet de oppervlakken' },
          { en: 'k = 8.99\u00d710\u2079 N\u00b7m\u00b2/C\u00b2', nl: 'k = 8,99\u00d710\u2079 N\u00b7m\u00b2/C\u00b2' },
        ],
      },
      {
        id: 'fb-formula',
        type: 'formula',
        title: { en: 'Key Formulas', nl: 'Belangrijke Formules' },
        content: { en: 'Essential equations for electric fields.', nl: 'Essenti\u00eble formules voor elektrische velden.' },
        formula: 'E = F/q\nE = V/d\nF = k\u00b7q\u2081\u00b7q\u2082/r\u00b2\nV = W/q\nW = qV',
        formulaExplanation: {
          en: 'E = field strength (N/C or V/m), F = force (N), q = charge (C), V = potential difference (V), d = plate separation (m), k = 8.99\u00d710\u2079 N\u00b7m\u00b2/C\u00b2, r = distance between charges (m), W = work (J).',
          nl: 'E = veldsterkte (N/C of V/m), F = kracht (N), q = lading (C), V = potentiaalverschil (V), d = plaatafstand (m), k = 8,99\u00d710\u2079 N\u00b7m\u00b2/C\u00b2, r = afstand tussen ladingen (m), W = arbeid (J).',
        },
      },
      {
        id: 'fb-example',
        type: 'example',
        title: { en: 'Worked Example', nl: 'Uitgewerkt Voorbeeld' },
        content: { en: 'Calculate the electric field and force on an electron between parallel plates.', nl: 'Bereken het elektrisch veld en de kracht op een elektron tussen parallelle platen.' },
        example: {
          problem: {
            en: 'Parallel plates separated by 2.0 cm with 200 V across them. Find E and the force on an electron (q = 1.60\u00d710\u207b\u00b9\u2079 C).',
            nl: 'Parallelle platen op 2,0 cm afstand met 200 V spanning. Bepaal E en de kracht op een elektron (q = 1,60\u00d710\u207b\u00b9\u2079 C).',
          },
          solution: [
            { en: 'Step 1: E = V/d = 200/0.020 = 10 000 V/m = 1.0\u00d710\u2074 N/C', nl: 'Stap 1: E = V/d = 200/0,020 = 10 000 V/m = 1,0\u00d710\u2074 N/C' },
            { en: 'Step 2: F = qE = 1.60\u00d710\u207b\u00b9\u2079 \u00d7 1.0\u00d710\u2074 = 1.6\u00d710\u207b\u00b9\u2075 N', nl: 'Stap 2: F = qE = 1,60\u00d710\u207b\u00b9\u2079 \u00d7 1,0\u00d710\u2074 = 1,6\u00d710\u207b\u00b9\u2075 N' },
          ],
        },
      },
      {
        id: 'fb-summary',
        type: 'summary',
        title: { en: 'Summary', nl: 'Samenvatting' },
        content: { en: 'Key ideas from electric fields.', nl: 'Belangrijkste idee\u00ebn uit elektrische velden.' },
        bulletPoints: [
          { en: 'E = F/q describes force per unit charge', nl: 'E = F/q beschrijft kracht per eenheid lading' },
          { en: 'Between parallel plates: E = V/d (uniform)', nl: 'Tussen parallelle platen: E = V/d (homogeen)' },
          { en: 'Field lines: + to \u2212, density = strength', nl: 'Veldlijnen: + naar \u2212, dichtheid = sterkte' },
          { en: 'Coulomb\'s law: F = kq\u2081q\u2082/r\u00b2 (inverse-square law)', nl: 'Wet van Coulomb: F = kq\u2081q\u2082/r\u00b2 (omgekeerd-kwadratenwet)' },
          { en: 'Work done: W = qV', nl: 'Arbeid: W = qV' },
        ],
      },
    ],
  }
};

export function getTutorial(topicId: string): Tutorial | undefined {
  return tutorials[topicId];
}

export function hasTutorial(topicId: string): boolean {
  return topicId in tutorials;
}
