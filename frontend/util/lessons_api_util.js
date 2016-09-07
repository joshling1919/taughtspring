export const fetchAllLessons = function(success) {
  $.ajax({
    method: 'GET',
    url: '/api/lessons',
    success
  });
};

export const fetchLesson = function(lessonId, success) {
  $.ajax({
    method: 'GET',
    url: `/api/lessons/${lessonId}`,
    success
  });
};

export const createLesson = function(lesson, success, error) {
  $.ajax({
    method: 'POST',
    url: '/api/lessons',
    data: lesson,
    success,
    error
  });
};

export const updateLesson = function(lesson, success, error) {
  $.ajax({
    method: 'PATCH',
    url: `/api/lessons/${lesson.lesson.id}`,
    data: lesson,
    success,
    error
  });
};

export const deleteLesson = function(lessonId, success) {
  $.ajax({
    method: 'DELETE',
    url: `/api/lessons/${lessonId}`,
    success,
    error: () => {
      console.log('Deleting Error');
    }
  });
};

export const deleteObjective = function(objectiveId, success) {
  $.ajax({
    method: 'DELETE',
    url: `/api/objectives/${objectiveId}`,
    success,
    error: () => {
      console.log('Deleting Error');
    }
  });
};

export const createObjective = function(blankObjective, success) {
  $.ajax({
    method: 'POST',
    url: "/api/objectives/",
    data: blankObjective,
    success,
    error: () => {
      console.log('adding blank object error');
    }
  });
};

export const deleteKeyPoint = function(keyPointId, success) {
  $.ajax({
    method: 'DELETE',
    url: `/api/key_points/${keyPointId}`,
    success,
    error: () => {
      console.log('Deleting Error');
    }
  });
};

export const createKeyPoint = function(blankKeyPoint, success) {
  $.ajax({
    method: 'POST',
    url: "/api/key_points/",
    data: blankKeyPoint,
    success,
    error: () => {
      console.log('adding blank object error');
    }
  });
};
