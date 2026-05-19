import {

  notificationPendingContent,
  notificationReleasedContent,
  notificationActiveContent,

  formStartPendingContent,
  formStartReleasedContent,
  formStartActiveContent,

  examDatePendingContent,
  examDateReleasedContent,
  examDateActiveContent,

  admitCardPendingContent,
  admitCardReleasedContent,
  admitCardActiveContent,

  answerKeyPendingContent,
  answerKeyReleasedContent,
  answerKeyActiveContent,

  resultPendingContent,
  resultReleasedContent,
  resultActiveContent

}
from "./examLifecycleContent";

export const EXAM_LIFECYCLE_TEMPLATES = {

  /* =========================================
     NOTIFICATION
  ========================================= */

  notification: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Notification Out Soon`,

      content:
        notificationPendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Notification Released`,

      content:
        notificationReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Notification Released`,

      content:
        notificationActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Official Notification"

    })

  },

  /* =========================================
     APPLICATION FORM
  ========================================= */

  form_start: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Application Form`,

      content:
        formStartPendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Application Form Started`,

      content:
        formStartReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Application Form Started`,

      content:
        formStartActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Apply Online"

    })

  },

  /* =========================================
     EXAM DATE
  ========================================= */

  exam_date: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Exam Date`,

      content:
        examDatePendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Exam Date Released`,

      content:
        examDateReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Exam Date Released`,

      content:
        examDateActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Check Exam Date"

    })

  },

  /* =========================================
     ADMIT CARD
  ========================================= */

  admit_card: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Admit Card`,

      content:
        admitCardPendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Admit Card Released`,

      content:
        admitCardReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Admit Card Released`,

      content:
        admitCardActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Download Admit Card"

    })

  },

  /* =========================================
     ANSWER KEY
  ========================================= */

  answer_key: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Answer Key`,

      content:
        answerKeyPendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Answer Key Released`,

      content:
        answerKeyReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Answer Key Released`,

      content:
        answerKeyActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Download Answer Key"

    })

  },

  /* =========================================
     RESULT
  ========================================= */

  result: {

    upcoming: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Result`,

      content:
        resultPendingContent(exam)

    }),

    released: (
      exam:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Result Released`,

      content:
        resultReleasedContent(exam)

    }),

    active: (
      exam:any,
      post:any
    ) => ({

      title:
        `${exam.short_name} ${exam.year} Result Released`,

      content:
        resultActiveContent(
          exam,
          post
        ),

      buttonLabel:
        "Check Result"

    })

  }

};