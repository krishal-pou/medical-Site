const products = [
    // Cardio
    { id: 1, name: 'Amlodipine 5mg', description: 'Calcium channel blocker for high blood pressure and chest pain.', category: 'cardio', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Atenolol 50mg', description: 'Beta-blocker used to treat heart conditions and high blood pressure.', category: 'cardio', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Aspirin 75mg', description: 'Low-dose aspirin for heart attack and stroke prevention.', category: 'cardio', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Diabetic
    { id: 4, name: 'Metformin 500mg', description: 'First-line medication for type 2 diabetes management.', category: 'diabetic', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'Glibenclamide 5mg', description: 'Sulfonylurea class drug used to lower blood sugar levels.', category: 'diabetic', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, name: 'Insulin Glargine', description: 'Long-acting insulin for controlling blood sugar in diabetes.', category: 'diabetic', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Gastric
    { id: 7, name: 'Omeprazole 20mg', description: 'Proton pump inhibitor for acid reflux and stomach ulcers.', category: 'gastric', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, name: 'Pantoprazole 40mg', description: 'Reduces stomach acid production effectively.', category: 'gastric', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 9, name: 'Domperidone 10mg', description: 'Antiemetic drug to treat nausea and vomiting.', category: 'gastric', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // NSAID
    { id: 10, name: 'Ibuprofen 400mg', description: 'Anti-inflammatory for pain, fever and inflammation relief.', category: 'nsaid', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 11, name: 'Diclofenac 50mg', description: 'NSAID used for arthritis pain and musculoskeletal disorders.', category: 'nsaid', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 12, name: 'Naproxen 250mg', description: 'Long-acting NSAID for inflammatory pain conditions.', category: 'nsaid', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Dermatology
    { id: 13, name: 'Clotrimazole Cream 1%', description: 'Antifungal cream for skin infections and ringworm.', category: 'dermatology', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 14, name: 'Hydrocortisone 1%', description: 'Topical corticosteroid for eczema and skin inflammation.', category: 'dermatology', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 15, name: 'Betamethasone Cream', description: 'Potent steroid cream for severe skin conditions.', category: 'dermatology', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Eye Care
    { id: 16, name: 'Ciprofloxacin Eye Drops', description: 'Antibiotic eye drops for bacterial eye infections.', category: 'eyecare', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 17, name: 'Tobramycin Eye Drops', description: 'Effective against a wide range of bacterial eye infections.', category: 'eyecare', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 18, name: 'Lubricating Eye Drops', description: 'Relieves dry eyes and provides soothing moisture.', category: 'eyecare', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Antihistamine
    { id: 19, name: 'Cetirizine 10mg', description: 'Non-drowsy antihistamine for allergy relief.', category: 'antihistamine', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 20, name: 'Loratadine 10mg', description: 'Second-generation antihistamine, once-daily dosing.', category: 'antihistamine', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 21, name: 'Fexofenadine 120mg', description: 'Fast-acting antihistamine for seasonal allergies.', category: 'antihistamine', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Cough & Cold
    { id: 22, name: 'Ambroxol Syrup', description: 'Mucolytic agent that helps clear airway mucus.', category: 'cough', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 23, name: 'Dextromethorphan Syrup', description: 'Cough suppressant for dry, irritating cough.', category: 'cough', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 24, name: 'Paracetamol 500mg', description: 'Analgesic and antipyretic for cold and fever.', category: 'cough', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Asthma
    { id: 25, name: 'Salbutamol Inhaler', description: 'Bronchodilator for quick relief of asthma symptoms.', category: 'asthma', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 26, name: 'Budesonide Inhaler', description: 'Inhaled corticosteroid for asthma prevention.', category: 'asthma', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 27, name: 'Montelukast 10mg', description: 'Leukotriene receptor antagonist for asthma maintenance.', category: 'asthma', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Antibiotics
    { id: 28, name: 'Amoxicillin 500mg', description: 'Broad-spectrum penicillin antibiotic for various infections.', category: 'antibiotics', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 29, name: 'Azithromycin 500mg', description: 'Macrolide antibiotic for respiratory and skin infections.', category: 'antibiotics', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 30, name: 'Ciprofloxacin 500mg', description: 'Fluoroquinolone antibiotic for urinary and GI infections.', category: 'antibiotics', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Baby Care
    { id: 31, name: 'Paracetamol Syrup (Pediatric)', description: 'Child-safe fever and pain relief suspension.', category: 'babycare', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 32, name: 'Zinc Syrup (Pediatric)', description: 'Zinc supplementation for child growth and immunity.', category: 'babycare', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 33, name: 'ORS Sachet', description: 'Oral rehydration salts for diarrhea and dehydration.', category: 'babycare', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' },

    // Cosmetics
    { id: 34, name: 'Sunscreen SPF 50', description: 'Broad-spectrum UV protection for daily skin care.', category: 'cosmetics', image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 35, name: 'Moisturizing Lotion', description: 'Dermatologist-tested daily moisturizer for all skin types.', category: 'cosmetics', image: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 36, name: 'Vitamin C Serum', description: 'Brightening serum with antioxidant protection.', category: 'cosmetics', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400' }
];
