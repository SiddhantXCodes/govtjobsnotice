import {
  EXAM_LIFECYCLE_CONFIG
}
from "./examLifecycleConfig";

/* =========================================
   BUILD LIFECYCLE SECTION
========================================= */

function buildLifecycleSection(
  key:string
){

  const config =
    EXAM_LIFECYCLE_CONFIG[key];

  return {

    /* SECTION ID */

    id:
      config.sectionId,

    /* LABEL */

    label:
      config.label,

    /* TYPE */

    type:
      "lifecycle",

    /* STATUS TYPE */

    statusType:
      config.key,

    /* EXTRA CONFIG */

    sectionId:
      config.sectionId,

    order:
      config.order || 0

  };

}

/* =========================================
   FINAL PAGE SECTIONS
========================================= */

export const EXAM_PAGE_SECTIONS = [

  /* =====================================
     OVERVIEW
  ===================================== */

  {
    id:"overview",
    label:"Overview",
    type:"content",
    field:"overview"
  },

  /* =====================================
     NOTIFICATION
  ===================================== */

  buildLifecycleSection(
    "notification"
  ),

  /* =====================================
     IMPORTANT DATES
  ===================================== */

  {
    id:"important-dates",
    label:"Important Dates",
    type:"content",
    field:"important_dates"
  },

  /* =====================================
     APPLICATION FORM
  ===================================== */

  buildLifecycleSection(
    "form_start"
  ),

  /* =====================================
     VACANCY
  ===================================== */

  {
    id:"vacancy-details",
    label:"Vacancy Details",
    type:"content",
    field:"vacancy_details"
  },

  /* =====================================
     ELIGIBILITY
  ===================================== */

  {
    id:"eligibility",
    label:"Eligibility Criteria",
    type:"content",
    field:"eligibility"
  },

  /* =====================================
     SELECTION PROCESS
  ===================================== */

  {
    id:"selection-process",
    label:"Selection Process",
    type:"content",
    field:"selection_process"
  },

  /* =====================================
     EXAM PATTERN
  ===================================== */

  {
    id:"exam-pattern",
    label:"Exam Pattern",
    type:"content",
    field:"exam_pattern"
  },

  /* =====================================
     SYLLABUS
  ===================================== */

  {
    id:"syllabus",
    label:"Syllabus",
    type:"content",
    field:"syllabus"
  },

  /* =====================================
     EXAM DATE
  ===================================== */

  buildLifecycleSection(
    "exam_date"
  ),

  /* =====================================
     CITY INTIMATION
  ===================================== */

  buildLifecycleSection(
    "city_intimation"
  ),

  /* =====================================
     ADMIT CARD
  ===================================== */

  buildLifecycleSection(
    "admit_card"
  ),

  /* =====================================
     ANSWER KEY
  ===================================== */

  buildLifecycleSection(
    "answer_key"
  ),

  /* =====================================
     RESULT
  ===================================== */

  buildLifecycleSection(
    "result"
  ),

  /* =====================================
     SALARY
  ===================================== */

  {
    id:"salary",
    label:"Salary",
    type:"content",
    field:"salary"
  },

  /* =====================================
     IMPORTANT LINKS
  ===================================== */

  {
    id:"important-links",
    label:"Important Links",
    type:"content",
    field:"important_links"
  },

  /* =====================================
     FAQ
  ===================================== */

  {
    id:"faq",
    label:"FAQ",
    type:"content",
    field:"faq"
  }

];