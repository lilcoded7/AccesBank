# Generated by Django 4.1.6 on 2023-02-06 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0003_alter_customer_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
