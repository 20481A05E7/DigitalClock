from django.urls import path # type: ignore
from .views import *

app_name='clockapp'

urlpatterns=[
    path("",home,name='home')
]