# Generated by Django 4.1.6 on 2023-02-05 07:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='code',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='page.code'),
        ),
    ]