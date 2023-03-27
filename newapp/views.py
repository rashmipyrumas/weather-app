from django.shortcuts import render
from django.http import HttpResponse

def newapp(request):
    return HttpResponse("Hello world!")