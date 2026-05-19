/* =========================================
   NOTIFICATION
========================================= */

export function notificationPendingContent(
  exam:any
){

  return `

  <p>

    The official notification for
    ${exam.short_name} ${exam.year}
    is expected to be released soon
    at the official website
    ${exam.official_website || "www.ssc.gov.in"}.

  </p>

  <p>

    Through the
    ${exam.short_name} ${exam.year}
    recruitment process,
    thousands of vacancies are expected
    to be filled in various departments
    and ministries under
    ${exam.organization || "Government of India"}.

  </p>

  <p>

    Candidates preparing for
    ${exam.short_name}
    should regularly check this page
    for latest updates regarding
    notification PDF,
    application form,
    eligibility criteria,
    syllabus,
    exam pattern,
    exam date and selection process.

  </p>

  <p>

    Latest Update:
    As of now,
    there is no official confirmation
    regarding the release date,
    however the notification is expected soon
    based on previous recruitment trends.

  </p>

  `;

}

export function notificationReleasedContent(
  exam:any
){

  return `

  <p>

    The official notification for
    ${exam.short_name} ${exam.year}
    has already been released officially.

  </p>

  <p>

    Candidates can check
    eligibility criteria,
    age limit,
    vacancy details,
    exam pattern,
    syllabus,
    application dates and selection process
    through the official notification PDF.

  </p>

  <p>

    The recruitment notification contains
    complete details regarding
    application procedure,
    important instructions
    and category-wise vacancies.

  </p>

  `;

}

export function notificationActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The official notification for
    ${exam.short_name} ${exam.year}
    has been released officially.

  </p>

  <p>

    Candidates can now download
    the detailed notification PDF
    and check complete recruitment details.

  </p>

 

  `;

}

/* =========================================
   APPLICATION FORM
========================================= */

export function formStartPendingContent(
  exam:any
){

  return `

  <p>

    The online application process for
    ${exam.short_name} ${exam.year}
    will be conducted through the official portal.

  </p>

  <p>

    Candidates will have to complete
    One-Time Registration (OTR)
    before filling the online application form.

  </p>

  <p>

    Once the application process starts officially,
    direct application links,
    important dates,
    fee details and step-by-step instructions
    will be updated here.

  </p>

  `;

}

export function formStartReleasedContent(
  exam:any
){

  return `

  <p>

    The online application process for
    ${exam.short_name} ${exam.year}
    has already started officially.

  </p>

  <p>

    Eligible candidates can complete
    the application process through
    the official portal before the last date.

  </p>

  `;

}

export function formStartActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The application process for
    ${exam.short_name} ${exam.year}
    is currently active.

  </p>

  <p>

    Candidates are advised to complete
    the application process before deadline.

  </p>



  `;

}

/* =========================================
   EXAM DATE
========================================= */

export function examDatePendingContent(
  exam:any
){

  return `

  <p>

    The official exam date for
    ${exam.short_name} ${exam.year}
    will be announced soon.

  </p>

  <p>

    Candidates are advised to continue
    their preparation according to
    the latest syllabus and exam pattern.

  </p>

  `;

}

export function examDateReleasedContent(
  exam:any
){

  return `

  <p>

    The official exam schedule for
    ${exam.short_name} ${exam.year}
    has already been announced.

  </p>

  <p>

    Candidates should prepare according
    to the announced examination dates.

  </p>

  `;

}

export function examDateActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The official exam date for
    ${exam.short_name} ${exam.year}
    has been released officially.

  </p>

  <p>

    Candidates can now check
    complete examination schedule,
    shift timings and exam instructions.

  </p>


  `;

}

/* =========================================
   ADMIT CARD
========================================= */

export function admitCardPendingContent(
  exam:any
){

  return `

  <p>

    Admit cards for
    ${exam.short_name} ${exam.year}
    will be released separately
    for all examination stages.

  </p>

  <p>

    Candidates will be able to download
    their admit card using
    registration number and password.

  </p>

  `;

}

export function admitCardReleasedContent(
  exam:any
){

  return `

  <p>

    Admit cards for
    ${exam.short_name} ${exam.year}
    have already been released officially.

  </p>

  <p>

    Candidates appearing in the examination
    should download their hall tickets
    before exam date.

  </p>

  `;

}

export function admitCardActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The admit card for
    ${exam.short_name} ${exam.year}
    is now available officially.

  </p>

  <p>

    Candidates can now download
    their hall tickets and check
    exam center details,
    reporting time and shift timings.

  </p>



  `;

}

/* =========================================
   ANSWER KEY
========================================= */

export function answerKeyPendingContent(
  exam:any
){

  return `

  <p>

    The official answer key for
    ${exam.short_name} ${exam.year}
    will be released after examination.

  </p>

  <p>

    Candidates will also get an opportunity
    to raise objections against provisional answers.

  </p>

  `;

}

export function answerKeyReleasedContent(
  exam:any
){

  return `

  <p>

    The answer key for
    ${exam.short_name} ${exam.year}
    has already been released officially.

  </p>

  <p>

    Candidates can check response sheets
    and estimate expected marks.

  </p>

  `;

}

export function answerKeyActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The official answer key for
    ${exam.short_name} ${exam.year}
    has been released officially.

  </p>

  <p>

    Candidates can now download
    answer key PDF and response sheets.

  </p>



  `;

}

/* =========================================
   RESULT
========================================= */

export function resultPendingContent(
  exam:any
){

  return `

  <p>

    The result for
    ${exam.short_name} ${exam.year}
    will be released separately
    for all stages of examination.

  </p>

  <p>

    Candidates qualifying one stage
    will become eligible
    for the next recruitment stage.

  </p>

  `;

}

export function resultReleasedContent(
  exam:any
){

  return `

  <p>

    The result for
    ${exam.short_name} ${exam.year}
    has already been declared officially.

  </p>

  <p>

    Candidates can check
    cutoff marks,
    merit list and qualifying status.

  </p>

  `;

}

export function resultActiveContent(
  exam:any,
  post:any
){

  return `

  <p>

    The result for
    ${exam.short_name} ${exam.year}
    has been released officially.

  </p>

  <p>

    Candidates can now check
    result PDF,
    merit list and cutoff marks.

  </p>


  `;

}