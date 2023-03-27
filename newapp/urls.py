from django.urls import path
from . import views

urlpatterns = [
    path('newapp/', views.newapp, name='newapp'),
]