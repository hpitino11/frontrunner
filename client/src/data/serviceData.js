import { AlertTriangle, CloudLightning, Droplets, Flame, Snowflake, Wind } from 'lucide-react';

export const serviceData = [
  {
    slug: 'water-damage', Icon: Droplets, title: 'Water damage restoration', navTitle: 'Water damage',
    short: 'Fast extraction, drying, and cleanup after leaks, floods, or plumbing failures.',
    eyebrow: 'Water damage restoration', heading: 'Stop the water. Start the recovery.',
    intro: 'Fast, measured water removal and structural drying for residential and commercial properties across Florida.',
    lead: 'Water moves quickly through flooring, walls, cabinetry, and insulation. Our team identifies the affected areas, removes standing water, and establishes a drying plan designed to limit secondary damage.',
    details: ['Emergency water extraction', 'Moisture mapping and monitoring', 'Professional air movement', 'Controlled demolition when required'],
    steps: ['Inspect the source and affected areas', 'Extract water and stabilize the loss', 'Dry and monitor the structure', 'Prepare the space for restoration'], image: '/images/living-before.png',
  },
  {
    slug: 'fire-smoke', Icon: Flame, title: 'Fire & smoke damage', navTitle: 'Fire & smoke',
    short: 'Cleanup support for smoke, soot, odor, and fire-related property damage.',
    eyebrow: 'Fire and smoke restoration', heading: 'Clear the damage. Restore the space.',
    intro: 'Careful cleanup and stabilization after fire, smoke, soot, and odor affect your property.',
    lead: 'Fire damage rarely stops where the flames did. Smoke and soot can travel into adjoining rooms, porous surfaces, and mechanical systems. Front Runner builds a clear scope for cleanup, removal, and restoration.',
    details: ['Soot and residue cleanup', 'Smoke odor treatment', 'Damaged-material removal', 'Content and surface assessment'],
    steps: ['Assess fire, smoke, and water impacts', 'Secure and stabilize affected areas', 'Remove residue and damaged material', 'Clean, deodorize, and prepare for repair'], image: '/images/restoration-team.png',
  },
  {
    slug: 'mold-prevention', Icon: Wind, title: 'Mold prevention', navTitle: 'Mold prevention',
    short: 'Moisture control and preventive cleaning to help reduce conditions that lead to mold growth.',
    eyebrow: 'Mold prevention', heading: 'Control the moisture. Help prevent mold.',
    intro: 'Moisture control and preventive cleaning services to help reduce mold-friendly conditions in Florida properties.',
    lead: 'Mold growth is driven by excess moisture. We focus on identifying moisture sources, improving drying and ventilation, and performing preventive surface cleaning to help reduce the conditions that allow mold to develop. We are not a licensed mold remediation or mold assessment company; if a property has an active mold contamination that requires licensed remediation, we can help you find a properly licensed specialist.',
    details: ['Moisture source evaluation', 'Preventive surface cleaning', 'Improved drying & ventilation', 'Guidance to help reduce recurrence'],
    steps: ['Inspect the property for moisture issues', 'Identify conditions that contribute to mold growth', 'Perform preventive cleaning and drying support', 'Provide guidance to help prevent recurrence'], image: '/images/about-2.png',
  },
  {
    slug: 'storm-damage', Icon: CloudLightning, title: 'Storm damage restoration', navTitle: 'Storm damage',
    short: 'Emergency cleanup after heavy rain, wind, roof leaks, and storm-related damage.',
    eyebrow: 'Storm damage restoration', heading: 'Respond quickly after the weather clears.',
    intro: 'Statewide support for water intrusion and property damage caused by Florida storms.',
    lead: 'Heavy rain and wind can create multiple damage points at once. We help identify water intrusion, stabilize affected areas, remove wet material, and begin the drying process quickly.',
    details: ['Storm-water extraction', 'Roof-leak interior cleanup', 'Wet-material removal', 'Structural drying and monitoring'],
    steps: ['Inspect and document affected areas', 'Stop active interior damage', 'Remove water and wet materials', 'Dry the structure and plan restoration'], image: '/images/restoration-team.png',
  },
  {
    slug: 'emergency-restoration', Icon: AlertTriangle, title: 'Emergency restoration', navTitle: 'Emergency response',
    short: 'A direct line to restoration help 24 hours a day, anywhere in Florida.',
    eyebrow: '24/7 emergency restoration', heading: 'When it cannot wait, call Front Runner.',
    intro: 'Rapid coordination for urgent water, fire, and storm damage throughout Florida.',
    lead: 'The first hours after property damage matter. Our emergency response process focuses on understanding the loss, protecting the property from further damage, and mobilizing the right equipment and crew.',
    details: ['24/7 phone response', 'Rapid damage assessment', 'Property stabilization', 'Clear next-step guidance'],
    steps: ['Call and tell us what happened', 'Receive immediate safety guidance', 'Coordinate inspection and response', 'Begin stabilization and cleanup'], image: '/images/about-1.png',
  },
  {
    slug: 'dry-ice-blasting', Icon: Snowflake, title: 'Dry ice blasting', navTitle: 'Dry ice blasting',
    short: 'Low-moisture surface cleaning for soot, mold residue, and stubborn contaminants.',
    eyebrow: 'Dry ice blasting', heading: 'Powerful cleaning. Minimal secondary waste.',
    intro: 'Specialized dry ice blasting for appropriate restoration and contaminant-removal applications.',
    lead: 'Dry ice blasting propels solid carbon dioxide pellets that sublimate on impact. For suitable surfaces, it can remove soot, residue, and contaminants without adding water or abrasive blasting media to the work area.',
    details: ['Low-moisture cleaning process', 'No spent blasting media', 'Detailed surface cleaning', 'Useful for select soot and residue removal'],
    steps: ['Evaluate the material and application', 'Protect adjoining surfaces and systems', 'Blast and capture released debris', 'Inspect and detail-clean the area'], image: '/images/garage-before.png',
  },
];

export function getService(slug) {
  return serviceData.find((service) => service.slug === slug);
}
