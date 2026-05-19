/* =========================================
   LIFECYCLE CONFIG
========================================= */

export const EXAM_LIFECYCLE_CONFIG = {

    notification: {

        key:
            "notification",

        label:
            "Notification",

        sectionId:
            "notification"

    },

    form_start: {

        key:
            "form_start",

        label:
            "Application Form",

        sectionId:
            "application-form"

    },

    exam_date: {

        key:
            "exam_date",

        label:
            "Exam Date",

        sectionId:
            "exam-date"

    },

    city_intimation: {

        key:
            "city_intimation",

        label:
            "City Intimation",

        sectionId:
            "city-intimation"

    },

    admit_card: {

        key:
            "admit_card",

        label:
            "Admit Card",

        sectionId:
            "admit-card"

    },

    answer_key: {

        key:
            "answer_key",

        label:
            "Answer Key",

        sectionId:
            "answer-key"

    },

    result: {

        key:
            "result",

        label:
            "Result",

        sectionId:
            "result"

    }

};

/* =========================================
   ORDER
========================================= */

export const EXAM_LIFECYCLE_ORDER = [

    "notification",

    "form_start",

    "exam_date",

    "city_intimation",

    "admit_card",

    "answer_key",

    "result"

];