# Generated by Django 2.0.2 on 2018-02-28 10:50

from django.db import migrations
import django_prices.models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0036_remove_order_total_tax'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='shipping_price',
            new_name='shipping_price_gross',
        ),
        migrations.AlterField(
            model_name='order',
            name='shipping_price_gross',
            field=django_prices.models.MoneyField(currency='USD', decimal_places=2, default=0, editable=False, max_digits=12),
        ),
        migrations.AddField(
            model_name='order',
            name='shipping_price_net',
            field=django_prices.models.MoneyField(currency='USD', decimal_places=2, default=0, editable=False, max_digits=12),
        ),
    ]