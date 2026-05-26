import {
  EXAM_LIFECYCLE_ORDER
}
from "../examLifecycleConfig";

/* =========================================
   BUILD EXAM LIFECYCLE
========================================= */

export function buildExamLifecycle(
  posts:any[]
){

  const lifecycle:any = {};

  /* =========================================
     CURRENT ACTIVE STAGE
  ========================================= */

  let highestStageIndex = -1;

  posts.forEach((post)=>{

    const currentType =

      post.current_stage
        ?.trim()
        ?.toLowerCase();

    const stageIndex =

      EXAM_LIFECYCLE_ORDER.indexOf(
        currentType
      );

    if(stageIndex > highestStageIndex){

      highestStageIndex =
        stageIndex;

    }

  });

  /* =========================================
     BUILD STAGES
  ========================================= */

  EXAM_LIFECYCLE_ORDER.forEach((stage,index)=>{

    /* RELATED POST */

    const relatedPost =

      posts.find((post)=>

        post.current_stage
          ?.trim()
          ?.toLowerCase()

        === stage

      );

    /* DEFAULT */

    let status = "upcoming";

    /* PREVIOUS RELEASED STAGES */

    if(index < highestStageIndex){

      status = "released";

    }

    /* CURRENT ACTIVE STAGE */

    if(index === highestStageIndex){

      status = "active";

    }

    /* NEVER RELEASED */

    if(
      highestStageIndex === -1
    ){

      status = "upcoming";

    }

    lifecycle[stage] = {

      stage,

      status,

      post:
        relatedPost || null,

      isActive:
        index === highestStageIndex,

      isReleased:
        index < highestStageIndex,

      isUpcoming:
        index > highestStageIndex

    };

  });

  return lifecycle;

}