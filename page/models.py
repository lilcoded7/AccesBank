from django.db import models

# Create your models here.


class Code(models.Model):
    code = models.CharField(max_length=50)

    def __str__(self):
        return self.code


class Customer(models.Model):
    code          = models.ForeignKey(Code, on_delete=models.CASCADE, null=True)
    firstname     = models.CharField(max_length=100)
    lastname      = models.CharField(max_length=100)
    username      = models.CharField(max_length=100)
    email         = models.EmailField()
    password      = models.CharField(max_length=100)
    phone         = models.CharField(max_length=100)
    accountnumber = models.CharField(max_length=100)
    pin           = models.CharField(max_length=100)


    def __str__(self):
        return self.username