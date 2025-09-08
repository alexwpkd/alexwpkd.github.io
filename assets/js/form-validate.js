let registros = [];

function valid_datas(f) {
    // Expresiones regulares
    const rutRegex = /^[0-9]{7,8}[0-9Kk]{1}$/;
    const correoRegex = /^([\w\.\-]+)@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    // Validaciones
    if (f.name.value.trim() === '' || f.name.value.length > 50) {
        jQuery('#form_status').html('<span class="wrong">Nombre obligatorio y máximo 50 caracteres.</span>');
        notice(f.name);
    } else if (f.lastname.value.trim() === '' || f.lastname.value.length > 100) {
        jQuery('#form_status').html('<span class="wrong">Apellidos obligatorios y máximo 100 caracteres.</span>');
        notice(f.lastname);
    } else if (!rutRegex.test(f.phone.value.trim())) {
        jQuery('#form_status').html('<span class="wrong">Rut inválido. Ejemplo: 19011022K (sin puntos ni guion, 7-9 caracteres).</span>');
        notice(f.phone);
    } else if (f.email.value.trim() === '' || f.email.value.length > 100 || !correoRegex.test(f.email.value.trim())) {
        jQuery('#form_status').html('<span class="wrong">Correo obligatorio, máximo 100 caracteres y debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.</span>');
        notice(f.email);
    } else if (f.region.value.trim() === '') {
        jQuery('#form_status').html('<span class="wrong">Región obligatoria.</span>');
        notice(f.region);
    } else if (f.subject.value.trim() === '') {
        jQuery('#form_status').html('<span class="wrong">Comuna obligatoria.</span>');
        notice(f.subject);
    } else if (f.address.value.trim() === '' || f.address.value.length > 300) {
        jQuery('#form_status').html('<span class="wrong">Dirección obligatoria y máximo 300 caracteres.</span>');
        notice(f.address);
    } else {
        // Guardar datos
        registros.push({
            nombre: f.name.value.trim(),
            apellidos: f.lastname.value.trim(),
            rut: f.phone.value.trim(),
            correo: f.email.value.trim(),
            region: f.region.value.trim(),
            comuna: f.subject.value.trim(),
            direccion: f.address.value.trim()
        });
        jQuery('#form_status').html('<span class="success">Registro exitoso!</span>');
        f.reset();
    }
    return false;
}

function notice(f) {
    jQuery('#fruitkha-contact').find('input,textarea').css('border','none');
    f.style.border = '1px solid red';
    f.focus();
}