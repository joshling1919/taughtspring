class Api::LessonsController < ApplicationController
  def create
    @lesson = Lesson.new(lesson_params)
    if @lesson.save
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def update
    @lesson = Lesson.find(params[:id])
    if @lesson.update_attributes(lesson_params)
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def show
    @lesson = Link.find(params[:id])
  end

  def index
    @lessons = Lesson.all
    render :index
  end

  def destroy
    @link = Link.find(params[:id])
    @link.destroy
    render :show
  end

  private
  def lesson_params
    params.require(:lesson).permit(
      :title,
      :subject,
      :grade,
      :lesson_date,
      :image_url
    )
  end
end