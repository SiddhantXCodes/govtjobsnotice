import {
  EXAM_LIFECYCLE_CONFIG
}
  from "./examLifecycleConfig";

/* =========================================
   BUILD LIFECYCLE SECTION
========================================= */

function buildLifecycleSection(
  key: keyof typeof EXAM_LIFECYCLE_CONFIG
) {

  const config =
    EXAM_LIFECYCLE_CONFIG[key];

  return {

    id:
      config.sectionId,

    label:
      config.label,

    type:
      "lifecycle",

    statusType:
      config.key,

    sectionId:
      config.sectionId,



  };

}

/* =========================================
   FINAL PAGE SECTIONS
========================================= */

export const EXAM_PAGE_SECTIONS = [

  {
    id: "overview",
    label: "Overview",
    type: "content",
    source: "exam",
    field: "overview"
  },

  buildLifecycleSection(
    "notification"
  ),

  {
    id: "important-dates",
    label: "Important Dates",
    type: "content",
    source: "dynamic",
    field: "important_dates"
  },

  buildLifecycleSection(
    "form_start"
  ),

  {
    id: "vacancy-details",
    label: "Vacancy Details",
    type: "content",
    source: "dynamic",
    field: "vacancy_details"
  },

  {
    id: "eligibility",
    label: "Eligibility Criteria",
    type: "content",
    source: "dynamic",
    field: "eligibility"
  },

  {
    id: "selection-process",
    label: "Selection Process",
    type: "content",
    source: "dynamic",
    field: "selection_process"
  },

  {
    id: "exam-pattern",
    label: "Exam Pattern",
    type: "content",
    source: "exam",
    field: "exam_pattern"
  },

  {
    id: "syllabus",
    label: "Syllabus",
    type: "content",
    source: "exam",
    field: "syllabus"
  },

  buildLifecycleSection(
    "exam_date"
  ),

  buildLifecycleSection(
    "city_intimation"
  ),

  buildLifecycleSection(
    "admit_card"
  ),

  buildLifecycleSection(
    "answer_key"
  ),

  buildLifecycleSection(
    "result"
  ),

  {
    id: "salary",
    label: "Salary",
    type: "content",
    source: "exam",
    field: "salary"
  },

  {
    id: "important-links",
    label: "Important Links",
    type: "content",
    source: "dynamic",
    field: "important_links"
  },

  {
    id: "faq",
    label: "FAQ",
    type: "content",
    source: "dynamic",
    field: "faq"
  }

];