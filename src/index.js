const spacetime = require('spacetime');

function bn(ext = null)
{
let name = spacetime.now().format('{year}-{date-pad}-{month-pad}_{hour-24}-{minute-pad}-{second-pad}');
if (ext != null)
{
name += `.${ext}`;
}
return name;
}

module.exports = bn;
