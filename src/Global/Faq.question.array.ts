
type faq_type = {
    key: string,
    label: string,
    children: string,
}


export const faq_items1: faq_type[] = [
    {
        key: '1',
        label: 'Who can donate blood?',
        children: 'Generally, individuals aged 18-65, weighing at least 50 kg, in good health, and meeting eligibility criteria for blood donation can donate.',
    },
    {
        key: '2',
        label: 'How often can I donate blood?',
        children: 'Typically, you can donate whole blood every 56 days (8 weeks) or platelets every 7 days, up to a certain limit per year.',
    },
    {
        key: '3',
        label: 'Is it safe to donate blood?',
        children: 'Yes, donating blood is safe. Sterile equipment is used for each donation, ensuring minimal risk of infection.',
    },
];


export const faq_items2: faq_type[] = [
    {
        key: '1',
        label: 'What should I do before donating blood?',
        children: 'Eat a healthy meal, stay hydrated, and get adequate rest. Avoid fatty foods just before donation.',
    },
    {
        key: '2',
        label: 'Can I donate blood if I have a cold or flu?',
        children: 'No, it’s important to postpone your donation if you’re feeling unwell. Wait until you’ve fully recovered.',
    },
    {
        key: '3',
        label: 'How long does the blood donation process take?',
        children: 'The entire process, including registration, medical check-up, and donation, usually takes about 30-45 minutes.',
    },
];
