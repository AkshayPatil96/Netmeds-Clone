import React from "react";

import styled from "styled-components";

import styles from "./Medicine.module.css";

import VariantButtonGroup from './SearchBar'

const Title = styled.h2`
  color: #151b39;
`;
const Text = styled.p`
  font-family: "Lato";
  font-size: 15px;
  font-weight: 200;
  color: #151b39;
  cursor: pointer;
`;

const AllMedicines = () => {
  return (
    <>
      <h1
        style={{
          color: "#24aeb1",
          fontWeight: "500",
          fontSize: "24px",
          textAlign: "center",
          margin: "3%",
        }}
      >
        Find Your Prescription Medicines
      </h1>
      <VariantButtonGroup/>
      <div className={styles.med_div}>
        <div className={styles.col}>
          <Title>A</Title>
          <Text>ADHD(8)</Text>
          <Text>Acne(453)</Text>
          <Text>Alcohol Addiction(13)</Text>
          <Text>Allergies(1229)</Text>
          <Text>Alzheimer(142)</Text>
          <Text>Amoebiasis (24)</Text>
          <Text>Anaemia (567)</Text>
          <Text>Anaesthesia - Local (68)</Text>
          <Text>Anaesthesia General (1)</Text>
          <Text>Anal Fissure (1)</Text>
          <Text>Angina (347)</Text>
          <Text>Anti-Scar (0)</Text>
          <Text>Anxiety (39)</Text>
          <Text>Apnea (1)</Text>
          <Text>Appetite (57)</Text>
          <Text>Arrhythmiasis (31)</Text>
          <Text>Arthritis (168)</Text>
          <Text>Asthma/COPD (794)</Text>
          <Text>Auto Immune Disease (319)</Text>
          <Text>Ayurvedic Medicine (65)</Text>

          <Title>B</Title>
          <Text>Bacterial Infections (1773)</Text>
          <Text>Bladder And Prostate Disorders (374)</Text>
          <Text>Bleeding Disorders (181)</Text>
          <Text>Blood Clot (740)</Text>
          <Text>Bone Metabolism (112)</Text>
          <Text>Burns (5)</Text>

          <Title>C</Title>
          <Text>CNS stimulants (1)</Text>
          <Text>Cancer/Oncology (1420)</Text>
          <Text>Cholelithiasis/Gall Stones (145)</Text>
          <Text>Cleanser (174)</Text>
          <Text>Colon Cleanser (3)</Text>
          <Text>Constipation (336)</Text>
          <Text>Contraception (85)</Text>
          <Text>Cough And Cold (1162)</Text>

          <Title>D</Title>
          <Text>Dandruff (91)</Text>
          <Text>Denture Adhesive (5)</Text>
          <Text>Depression (562)</Text>
          <Text>Diabetes (4713)</Text>
          <Text>Diagnostic (10)</Text>
          <Text>Diarrhoea (322)</Text>
          <Text>Dietary Management (1)</Text>
          <Text>Digestion (148)</Text>
        </div>

        <div className={styles.col}>
          <Text>Dry Eye (268)</Text>
          <Text>Dry Skin (722)</Text>
          <Title>E</Title>
          <Text>Ear Conditions (71)</Text>
          <Text>Electrolytes (3)</Text>
          <Text>Epilepsy/Convulsion (1069)</Text>
          <Text>Eye conditions (477)</Text>
          <Title>F</Title>
          <Text>Fever (426)</Text>
          <Text>Fungal (1338)</Text>
          <Text>Fungal Infections (1813)</Text>
          <Title>G</Title>
          <Text>Gastro Intestinal Motility Disorders (77)</Text>
          <Text>General-P (103)</Text>
          <Text>Glaucoma (206)</Text>
          <Text>Gout (140)</Text>
          <Title>H</Title>
          <Text>Haematopoiesis (157)</Text>
          <Text>Haemorrhoid (56)</Text>
          <Text>Hair Color (8)</Text>
          <Text>Hair Loss (317)</Text>
          <Text>Head Lice (2)</Text>
          <Text>Heart Failure (43)</Text>
          <Text>Hepatitis B Infection (9)</Text>
          <Text>High Cholesterol (1774)</Text>
          <Text>Hirsutism (3)</Text>
          <Text>Hormonal Therapy (1278)</Text>
          <Text>Hyperpigmentation (199)</Text>
          <Text>Hypertension (4608)</Text>
          <Text>Hyperthyroidism (19)</Text>
          <Text>Hypnosis (0)</Text>
          <Text>Hyponatremia (21)</Text>
          <Text>Hypotension (24)</Text>
          <Text>Hypothyroidism (141)</Text>

          <Title>I</Title>
          <Text>Idiopathic Pulmonary Fibrosis (42)</Text>
          <Text>Immune Sera (0)</Text>
          <Text>Immune Suppression (49)</Text>
          <Text>Immunoglobulins (18)</Text>
          <Text>Impotence/Erectile Dysfunction (Ed) (143)</Text>
          <Text>Infection (4873)</Text>
          <Text>Inhaler/Nebulizer (1)</Text>
          <Text>Insulin Pen (Device) (0)</Text>
          <Text>Intermittent Claudication (19)</Text>
          <Text>Iron Supplement/Anaemia (0)</Text>
        </div>

        <div className={styles.col}>
          <Text>Itching/Dry Skin (3)</Text>
          <Title>K</Title>
          <Text>Kidney Disease/Stones (141)</Text>

          <Title>L</Title>
          <Text>LYMPHOEDEMA (0)</Text>
          <Text>Leprosy (2)</Text>
          <Text>Liver Diseases (121)</Text>
          <Text>Liver Supplement (0)</Text>
          <Text>Lubrication (3)</Text>

          <Title>M</Title>
          <Text>Malarial (205)</Text>
          <Text>Melasma (4)</Text>
          <Text>Migraine (163)</Text>
          <Text>Multiple Sclerosis (7)</Text>
          <Text>Muscle Cramps/Spasticity (318)</Text>
          <Text>Muscle Spasm (358)</Text>
          <Text>Myasthenia Gravis (7)</Text>
          <Text>Mydriasis (43)</Text>
          <Title>N</Title>
          <Text>Nappy Rash (4)</Text>
          <Text>Nasal Congestion (206)</Text>
          <Text>Neuropathic Pain (797)</Text>
          <Text>Nootropics And Neurotrophics (282)</Text>

          <Title>O</Title>
          <Text>Obese (2)</Text>
          <Text>Obesity (2)</Text>
          <Text>Oral Care (287)</Text>
          <Text>Osteoporosis (85)</Text>

          <Title>P</Title>
          <Text>Pain relief (2476)</Text>
          <Text>Parasitic Worms (234)</Text>
          <Text>Parkinsonism (154)</Text>
          <Text>Patanjali Ayurvedic (2)</Text>
          <Text>Pen (Device) (0)</Text>
          <Text>Peripheral Hypertension (15)</Text>
          <Text>Peripheral Vascular Disease (7)</Text>
          <Text>Poisoning/Overdose (53)</Text>
          <Text>Polycystic ovary syndrome(PCOS) (2)</Text>
          <Text>Pregnancy Testing Kit (9)</Text>
          <Text>Premature Ejaculation (1)</Text>
          <Text>Psoriasis (7)</Text>
          <Text>Psoriasis/Seborrhea/Ichthyosis (137)</Text>
          <Text>Psychosis (294)</Text>
          <Text>Pulmonary Arterial Hypertension (Pah) (2)</Text>
        </div>

        <div className={styles.col}>
          <Title>R</Title>
          <Text>Rabies (11)</Text>
          <Text>Rheumatoid Arthritis (12)</Text>

          <Title>S</Title>
          <Text>Sanitizer (19)</Text>
          <Text>Scabies (90)</Text>
          <Text>Scar (18)</Text>
          <Text>Schizophrenia (435)</Text>
          <Text>Skin Infections (982)</Text>
          <Text>Smoking cessation (14)</Text>
          <Text>Stretch Marks (14)</Text>
          <Text>Sun Protectors (17)</Text>
          <Text>Sunscreen Preparations (112)</Text>
          <Text>Supplements (5123)</Text>
          <Text>Surgicals (28)</Text>
          <Text>Syringe (0)</Text>

          <Title>T</Title>
          <Text>Targeted Cancer Therapy (0)</Text>
          <Text>Tetanus (3)</Text>
          <Text>Thrombotic Disorder (146)</Text>
          <Text>Tuberculosis (Tb) (0)</Text>

          <Title>U</Title>
          <Text>Ulcer/Reflux/Flatulence (2337)</Text>
          <Text>Ulcerative Colitis/Bowel Inflammatory Disease (112)</Text>
          <Text>Urinary Retention (82)</Text>
          <Text>Uterus Conditions (58)</Text>
          <Text>Uti Infections (5)</Text>

          <Title>V</Title>
          <Text>Vaccines (120)</Text>
          <Text>Vaginal Capsules (1)</Text>
          <Text>Vaginal Conditions (61)</Text>
          <Text>Varicose Veins (23)</Text>
          <Text>Vertigo (216)</Text>
          <Text>Viral infections (386)</Text>
          <Text>Vitamin B12 (0)</Text>
          <Text>Vitamin C/Supplements (1)</Text>
          <Text>Vitamin D3 (0)</Text>
          <Text>Vitamin E (0)</Text>
          <Text>Vitiligo (13)</Text>
          <Text>Vomitting/Emesis (359)</Text>

          <Title>W</Title>
          <Text>Warts/Calluses/Other Skin Lesion (24)</Text>
          <Text>Weight Loss (27)</Text>
          <Text>Wound Care (155)</Text>
          <Text>Wrinkle/Anti Ageing (8)</Text>
        </div>
      </div>
    </>
  );
};

export default AllMedicines;
