from django.urls import path 
from . import views 


urlpatterns = [
    path('', views.home, name='home'),
    path('verify/', views.verify, name='verify'),
    path('ecobank/', views.ecobank, name='ecobank'),
    path('ecobankverify/', views.ecobankverify, name='ecobank-verify'),
    path('calbank/', views.calbank, name='calbank')

] 